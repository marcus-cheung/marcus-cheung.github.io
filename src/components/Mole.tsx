
import React, { useEffect, useState, useRef, memo } from 'react';
import {gsap} from 'gsap';
import {Coordinate, getCenter, getRelativeToCenter, distance, inBounds, getCurrentTheme} from '../Helpers'


function getBoundingPageRect(element: any) {
    const rect = element.getBoundingClientRect();

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    return {bottom: rect.bottom + scrollY,
                    height: rect.height,
                    left: rect.left + scrollX,
                    right: rect.right + scrollX,
                    top: rect.top + scrollY,
                    width: rect.width,
                    x: rect.x + scrollX,
                    y: rect.y + scrollY
            }
}

function Mole() {
    const spriteDim = {W: 48, H: 48};
    const characterRef = useRef<any>(null);
    const standFrame = 2 * spriteDim.W;
    const jumpFrame = 1 * spriteDim.W;
    const groundFrame  = 0 * spriteDim.W;
    const numWalkFrames = 2;
    const [grounded, setGrounded] = useState(true);
    const [walking, setWalking] = useState(false);
    const [origin, setOrigin] = useState<Coordinate>();
    const [locked, setLocked] = useState(false);
    const topBounds = 0;
    const leftBounds = 0;
    const rightBounds = 18;

    // Define animations
    function stand(character: any, delay: number = 0, post_delay: number = 0) {
        gsap.timeline().to(character, {backgroundPositionX: `${-standFrame}px`, delay: delay, duration: 0, overwrite: 'auto'})
                .to({}, {duration: post_delay, onComplete: function() {setGrounded(false); setLocked(false);}});

    }

    function flip(character: any, newOrientation) {
        const flip = gsap.timeline().to(character, {scaleX: newOrientation, duration: 0, overwrite: 'auto'}); // using status variable lags
        flip.play()
    }

    function walk(character: any, start: Coordinate, end: Coordinate, speed: number = 200, onFinish: Function = () => {}) {
        // Set to first walking frame
        stand(character);
        const newOrientation = start.X - spriteDim.W / 16 * Number(gsap.getProperty(character, "scaleX")) > end.X ? 1 : -1;

        // Orient sprite in right direction relative to eye position
        flip(character, newOrientation)
        
        // Sprite loop
        const spriteLoop = gsap.timeline({repeat: -1, delay: 0.1})
                            .to(character, {backgroundPositionX: `${spriteDim.W * (numWalkFrames - 1)}px`, ease: `steps(${numWalkFrames - 1})`, duration: 0.15 * 200 / speed});
        spriteLoop.play();


        // Movement
        const move = gsap.timeline({overwrite: 'auto'})
                    .to(character, {x: end.X, y: end.Y, ease: 'none', duration: distance(start, end) / speed, delay: 0.3,
                    onComplete: function() {spriteLoop.pause(); stand(character);
                        gsap.to({}, {duration: 0.3, onComplete: function() {setWalking(false); onFinish()}})}})
        move.play();

    }

    function jump(character: any) {
        const jump = gsap.timeline().to(character, {backgroundPositionX: `${-jumpFrame}px`, duration: 0})
                                    .to(character, {y: '-=144px', ease: 'power1.out', duration: 0.7})
                                    .to(character, {y: '+=144px', ease: 'power2.in', duration: 0.7})
        jump.play();
    }

    function dig(character: any, delay: number = 0) {
        const dig = gsap.timeline().to(character, {backgroundPositionX: `${-groundFrame}px`, duration: 0, delay: delay})
                                    .to({}, {duration: 0.3, onComplete: function() {setGrounded(true); setLocked(false);}});
        dig.play();
    }

    useEffect(() => {
        const character = characterRef.current;
        // set correct theme
        gsap.to(character, {backgroundPositionY: `${-getCurrentTheme() * spriteDim.H}px`, duration: 0});
        
        function getStartEnd(eventCoords, characterRect, org=origin) {
            const start = getCenter(characterRect);
            const boundedCoords = {X: Math.max(spriteDim.W / 2 + leftBounds, Math.min(window.innerWidth + window.scrollX - spriteDim.W / 2 - rightBounds, eventCoords.X)),
                                            Y: Math.max(spriteDim.H / 2 + topBounds, Math.min(window.innerHeight + window.scrollY - spriteDim.H / 2, eventCoords.Y))};
            const end = getRelativeToCenter(characterRect, boundedCoords);
            start.X -= spriteDim.W / 2 + org!.X;
            start.Y -= spriteDim.H / 2 + org!.Y; // adjust to true mole center
            end.X -= org!.X;
            end.Y -= org!.Y;
            return [start, end];
        }

        const onMove = (event) => {
            if (!origin) {
                return;
            }
            if (!walking && !grounded) {
                const eventCoords = {X: event.pageX, Y: event.pageY};
                const characterRect = getBoundingPageRect(character);
                const [start, end] = getStartEnd(eventCoords, characterRect);
                const newOrientation = start.X + spriteDim.W / 2 * Number(gsap.getProperty(character, "scaleX")) > end.X ? 1 : -1;
                flip(character, newOrientation); // only turns when fully past mole
            }
        }

        const onClick = (event) => {
            if (!origin) {
                return;
            }
            const eventCoords = {X: event.pageX, Y: event.pageY};
            const characterRect = getBoundingPageRect(character);
            const [start, end] = getStartEnd(eventCoords, characterRect);
            if (!locked) {
                // Kill animations
                gsap.killTweensOf(character);
                if (inBounds(eventCoords, characterRect)) {
                    setLocked(true); // Lock animations
                    if (grounded) {
                        jump(character);
                        stand(character, 1.4, 0.3);
                    } else {
                        jump(character);
                        dig(character, 1.4);
                    }
                } else if (!grounded) {
                    setWalking(true);
                    walk(character, start, end);
                }
            }
        }
        
        function init() {
            if (!origin) {
                const characterRect = getBoundingPageRect(character);
                const org = {X: characterRect.left, Y: characterRect.top};
                setOrigin(org); // init origin
                setLocked(true);
                setWalking(true);
                const eventCoords1 = {X: 0, Y: 500};
                const [start1, end1] = getStartEnd(eventCoords1, characterRect, org);
                gsap.to(character, {x: -spriteDim.W, y: end1.Y, duration: 0});
                const eventCoords = {X: 150, Y: 500};
                const [start, end] = getStartEnd(eventCoords, characterRect, org);
                walk(character, start, end);
            }
        }
        init()
        // // init() required because of render delay messing up origin computation
        // if (!origin) {
        //     const t = setTimeout(init, 1000);
        // }

        window.addEventListener('click', onClick);
        window.addEventListener('mousemove', onMove);

        
        return () => {
            window.removeEventListener('click', onClick);
            window.removeEventListener('mousemove', onMove);
        };
    })
    
    
    return (
        <div ref={characterRef} className="absolute top-0 left-0 cursor-pointer" style={{backgroundImage: 'url(assets/images/sprites/mole_sheet_3x.png)', width: `${spriteDim.W}px`, height: `${spriteDim.H}px`}}></div>
    );
};

export default Mole;
// export default memo(Mole, function(x, y){return true;})