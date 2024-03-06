
import React, { useEffect, useState, useRef } from 'react';
import {gsap} from 'gsap';

const SpriteAnimation: React.FC = () => {
    const scale = 1;
    const spriteDim = {W: 160 * scale, H: 160 * scale};
    const sheetDim = {W: 640 * scale, H: 640 * scale};
    const spriteSheetRef = useRef<any>(null);
    const containerRef = useRef<any>(null);
    const [grounded, setGrounded] = useState(true);
    const [locked, setLocked] = useState(false);
    const [loaded, setLoaded] = useState(false);


    
    useEffect(() => {
        const spriteSheet = spriteSheetRef.current;
        const container = containerRef.current;
        if (!loaded) {
            gsap.to(container, {x: window.innerWidth / 2, ease: "steps(1)", duration: 0});
            setLoaded(true);
        }

        const onClick = (event) => {
            
            // Kill any walk/move animations
            gsap.killTweensOf(container);

            const containerRect = container!.getBoundingClientRect();
            // Check if currently in animation
            if (!locked) {

                // Lock animations
                // Check in bounds
                
                if (event.clientX >= containerRect.left &&
                    event.clientX <= containerRect.right &&
                    event.clientY >= containerRect.top &&
                    event.clientY <= containerRect.bottom) {
                    setLocked(true);
                    gsap.killTweensOf(spriteSheet); // kill walking

                    if (grounded) {
                        const jump = gsap.timeline();
                        jump.to(spriteSheet, {x: -spriteDim.W * 1, ease:"steps(1)", duration: 0.5, overwrite: 'auto'})
                        .to(spriteSheet, {x: -spriteDim.W * 2, ease:"steps(1)",
                        onComplete: function() {setGrounded(false); setLocked(false);}});
                        jump.play();
                    } else {
                        const dig = gsap.timeline();
                        dig.to(spriteSheet, {x: -spriteDim.W * 1, ease:"steps(1)", duration: 0.5})
                        .to(spriteSheet, {x: 0, ease:"steps(1)",
                        onComplete: function() {setGrounded(true); setLocked(false);}});
                        dig.play();
                    }
                } else if (!grounded) { // Only when standing around allow movement
                    setLocked(false); // Allow interupts for dig
                    const containerX = containerRect.left + containerRect.width / 2;
                    const containerY = containerRect.top + containerRect.height / 2;
                    const dX = event.clientX - containerX;
                    const dY = event.clientY - containerY;
                    const distX = Math.abs(dX);
                    const distY = Math.abs(dY)
                    const distance = Math.max(distX, distY);

                    const flip = gsap.timeline()
                                .to(container,
                                    {scaleX: dX < 0 ? 1 : -1,
                                        duration: 0});
                    flip.play();

                    // walk animation start only from standstill
                    // movement
                    const walk = gsap.timeline({repeat: -1, delay: 0.3, overwrite: 'auto'})
                    .to(spriteSheet, {x: -spriteDim.W * 3, ease:"steps(1)", duration: 0.2})
                    .to(spriteSheet, {x: -spriteDim.W * 2, ease:"steps(1)", duration: 0.2});
                    console.log(event.clientY);
                    // console.log(event.clientY);
                    // console.log(`Mole loc: ${containerRect.top}`);                    
                    const move = gsap.timeline()
                    .to(container, {
                        x: event.clientX - spriteDim.W / 2,
                        y: event.clientY - spriteDim.W / 2,
                        ease: 'none',
                        duration: distance / 200,
                        delay: 0.3,
                        overwrite: 'auto',
                        onComplete: function() {gsap.killTweensOf(spriteSheet);
                                                gsap.to(spriteSheet, {x: -spriteDim.W * 2, ease:"steps(1)", duration: 0}); // Stand still
                                                setLocked(false);
                                                console.log(`Mole loc: ${containerRect.top}`);   
                                                }
                    });
                    walk.play();
                    move.play();
                }
            } else {
                setLocked(false);
            }
        }
        // Standing position
        window.addEventListener('click', onClick);


        return () => {
            window.removeEventListener('click', onClick);
        };
    });


    
    return (
        <div ref={containerRef} style={{width: `${spriteDim.W}px`, height: `${spriteDim.H}px`, overflow: "hidden"}}>
            <img ref={spriteSheetRef} src="assets/images/mole_sheet_large.png"
            style={{ imageRendering: "pixelated",
                    width: `${sheetDim.W}px`,
                    minWidth: `${sheetDim.W}px`,
                    height: `${sheetDim.H}px`,
                    minHeight: `${sheetDim.H}px`,
                    userSelect: 'none'}}/>
        </div>
    );
};

export default SpriteAnimation;
