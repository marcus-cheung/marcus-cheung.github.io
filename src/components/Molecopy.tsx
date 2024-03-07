
import React, { useEffect, useState, useRef } from 'react';
import {gsap} from 'gsap';
import {Coordinate, getCenter, getRelativeToCenter, distance, inBounds} from '../Helpers'


const Mole: React.FC = () => {
    const spriteDim = {W: 160, H: 160};
    const characterRef = useRef<any>(null);
    const standFrame = 2 * spriteDim.W;
    const jumpFrame = 1 * spriteDim.W;
    const groundFrame  = 0 * spriteDim.W;
    const numWalkFrames = 2;
    const [grounded, setGrounded] = useState(true);
    const [origin, setOrigin] = useState<Coordinate>();
    const [locked, setLocked] = useState(false);
    const [orientation, setOrientation] = useState(1); // start left facing
    const [loaded, setLoaded] = useState(false);

    // Define animations
    function stand(character: any, delay: number = 0) {
        gsap.to(character, {backgroundPositionX: `${-standFrame}px`, delay: delay, duration: 0, overwrite: 'auto'});
    }

    function walk(character: any, start: Coordinate, end: Coordinate, speed: number = 500) {
        
        console.log(distance(start, end));
        start.X -= spriteDim.W / 2 + origin!.X;
        start.Y -= spriteDim.H / 2 + origin!.Y; // adjust to true mole center
        end.X -= origin!.X;
        end.Y -= origin!.Y;

        // Set to first walking frame
        stand(character);

        const spriteMaster = gsap.timeline({overwrite: 'auto'})
        // Orient sprite in right direction
        const newOrientation = start.X - spriteDim.W / 16 * 3 * orientation > end.X ? 1 : -1
        setOrientation(newOrientation);
        const flip = gsap.timeline().to(character, {scaleX: newOrientation, duration: 0, overwrite: 'auto'});
        
        // Sprite loop
        const spriteLoop = gsap.timeline({repeat: -1, delay: 0.25})
                            .to(character, {backgroundPositionX: `${spriteDim.W * (numWalkFrames - 1)}px`, ease: `steps(${numWalkFrames - 1})`, duration: 0.2});
        spriteMaster.add(flip).add(spriteLoop);
        spriteMaster.play();

        // Movement
        const move = gsap.timeline({overwrite: 'auto'})
                    .to(character, {x: end.X,
                                    y: end.Y,
                                    ease: 'none',
                                    duration: distance(start, end) / speed,
                                    delay: 0.5,
                                    onComplete: function() {spriteMaster.pause(); stand(character)}});
        move.play();
    }

    function jump(character: any) {
        const jump = gsap.timeline().to(character, {backgroundPositionX: `${-jumpFrame}px`, duration: 0})
                                    .to({}, {duration: 0.5, onComplete: function() {setGrounded(false); setLocked(false);}});
        jump.play();
    }

    function dig(character: any) {
        const dig = gsap.timeline().to(character, {backgroundPositionX: `${-jumpFrame}px`, duration: 0})
                                    .to(character, {backgroundPositionX: `${-groundFrame}px`, duration: 0, delay: 0.5})
                                    .to({}, {duration: 0.3, onComplete: function() {setGrounded(true); setLocked(false);}});
        dig.play();
    }
    
    useEffect(() => {
        const character = characterRef.current;

        if (!origin) {
            const characterRect = character!.getBoundingClientRect();

            setOrigin({X: characterRect.left, Y: characterRect.top})
        }
        const onClick = (event) => {
            const clickCoords = {X: event.clientX, Y: event.clientY};
            const characterRect = character!.getBoundingClientRect();

            if (!locked) {
                // Kill animations
                gsap.killTweensOf(character);
                if (inBounds(clickCoords, characterRect)) {
                    setLocked(true); // Lock animations
                    if (grounded) {
                        jump(character);
                        stand(character, 0.3);
                    } else {
                        dig(character);
                    }
                } else if (!grounded) {
                    console.log(`rect${characterRect.left}, ${characterRect.top}`)
                    const boundedCoords = {X: Math.max(spriteDim.W / 2 + origin!.X, Math.min(window.innerWidth - spriteDim.W / 2, event.clientX)),
                                            Y: Math.max(spriteDim.H / 2 + origin!.Y, Math.min(window.innerHeight - spriteDim.H / 2, event.clientY))};

                    walk(character, getCenter(characterRect), getRelativeToCenter(characterRect, boundedCoords));
                }
            }
        }

        window.addEventListener('click', onClick);
        return () => {
            window.removeEventListener('click', onClick);
        };
    })
    
    
    return (
        <div ref={characterRef} style={{position: 'absolute', background: `url(assets/images/mole_sheet_large.png)`, width: `${spriteDim.W}px`, height: `${spriteDim.H}px`}}></div>
    );
};

export default Mole;
