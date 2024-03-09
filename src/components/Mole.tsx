
import React, { useEffect, useState, useRef, memo } from 'react';
import {gsap} from 'gsap';
import {Coordinate, getCenter, getRelativeToCenter, distance, inBounds} from '../Helpers'


const Mole= ({themeIndex}) => {
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
    const topBounds = 64;

    // Define animations
    function stand(character: any, delay: number = 0, post_delay: number = 0) {
        gsap.timeline().to(character, {backgroundPositionX: `${-standFrame}px`, delay: delay, duration: 0, overwrite: 'auto'})
                .to({}, {duration: post_delay, onComplete: function() {setGrounded(false); setLocked(false);}});

    }

    function flip(character: any, newOrientation) {
        const flip = gsap.timeline().to(character, {scaleX: newOrientation, duration: 0, overwrite: 'auto'}); // using status variable lags
        flip.play()
    }

    function walk(character: any, start: Coordinate, end: Coordinate, speed: number = 200) {
        setWalking(true);

        // Set to first walking frame
        stand(character);
        const newOrientation = start.X - spriteDim.W / 16 * Number(gsap.getProperty(character, "scaleX")) > end.X ? 1 : -1;

        // Orient sprite in right direction relative to eye position
        flip(character, newOrientation)
        
        // Sprite loop
        const spriteLoop = gsap.timeline({repeat: -1, delay: 0.5})
                            .to(character, {backgroundPositionX: `${spriteDim.W * (numWalkFrames - 1)}px`, ease: `steps(${numWalkFrames - 1})`, duration: 0.2});
        spriteLoop.play();

        // Movement
        const move = gsap.timeline({overwrite: 'auto'})
                    .to(character, {x: end.X, y: end.Y, ease: 'none', duration: distance(start, end) / speed, delay: 0.5,
                    onComplete: function() {spriteLoop.pause(); stand(character)}})
                    .to({}, {duration: 0.3, onComplete: function() {setWalking(false);}}) //delay before can turn
        move.play();
    }

    function jump(character: any) {
        const jump = gsap.timeline().to(character, {backgroundPositionX: `${-jumpFrame}px`, duration: 0})
                                    .to(character, {y: '-=144px', duration: 0.7})
                                    .to(character, {y: '+=144px', ease: 'power2.out', duration: 0.7})
        jump.play();
    }

    function dig(character: any, delay: number = 0) {
        const dig = gsap.timeline().to(character, {backgroundPositionX: `${-groundFrame}px`, duration: 0, delay: delay})
                                    .to({}, {duration: 0.3, onComplete: function() {setGrounded(true); setLocked(false);}});
        dig.play();
    }

    
    useEffect(() => {
        const character = characterRef.current;
        gsap.to(character, {backgroundPositionY: `${-themeIndex * spriteDim.H}px`, duration: 0});

        if (!origin) {
            const characterRect = character!.getBoundingClientRect();
            setOrigin({X: characterRect.left, Y: characterRect.top})
        }

        function getStartEnd(eventCoords, characterRect) {
            const start = getCenter(characterRect);
            const boundedCoords = {X: Math.max(spriteDim.W / 2, Math.min(window.innerWidth - spriteDim.W / 2, eventCoords.X)),
                                            Y: Math.max(spriteDim.H / 2 + topBounds, Math.min(window.innerHeight - spriteDim.H / 2, eventCoords.Y))};
            const end = getRelativeToCenter(characterRect, boundedCoords);
            start.X -= spriteDim.W / 2 + origin!.X;
            start.Y -= spriteDim.H / 2 + origin!.Y; // adjust to true mole center
            end.X -= origin!.X;
            end.Y -= origin!.Y;
            return [start, end];
        }

        const onMove = (event) => {
            if (!walking && !grounded) {
                const eventCoords = {X: event.clientX, Y: event.clientY};
                const characterRect = character!.getBoundingClientRect();
                const [start, end] = getStartEnd(eventCoords, characterRect);
                const newOrientation = start.X + spriteDim.W / 2 * Number(gsap.getProperty(character, "scaleX")) > end.X ? 1 : -1;
                flip(character, newOrientation); // only turns when fully past mole
            }
            
        }

        const onClick = (event) => {
            const eventCoords = {X: event.clientX, Y: event.clientY};
            const characterRect = character!.getBoundingClientRect();
            const [start, end] = getStartEnd(eventCoords, characterRect);
            if (!locked) {
                // Kill animations
                gsap.killTweensOf(character);
                if (inBounds(eventCoords, characterRect)) {
                    setLocked(true); // Lock animations
                    if (grounded) {
                        jump(character);
                        stand(character, 1.3, 0.3);
                    } else {
                        jump(character);
                        dig(character, 1.3);
                    }
                } else if (!grounded) {
                    walk(character, start, end);
                }
            }
        }

        window.addEventListener('click', onClick);
        window.addEventListener('mousemove', onMove);
        return () => {
            window.removeEventListener('click', onClick);
            window.removeEventListener('mousemove', onMove);
        };
    })
    
    
    return (
        <div ref={characterRef} className='cursor-pointer' style={{backgroundImage: 'url(assets/images/sprites/mole_sheet_3x.png)', width: `${spriteDim.W}px`, height: `${spriteDim.H}px`}}></div>
    );
};

export default Mole;