import React, { useEffect, useRef, memo} from 'react'
import { Engine, Render, Body, Bodies, World, Composites, Composite, Constraint} from 'matter-js'
import {themes} from '../Themes'
import { getCurrentTheme, distance } from '../Helpers'


  

const LightBulb = ({setThemeIndex, curTheme, setCursorStyle}) =>{
    const scene = useRef<any>();
    const bulbRef = useRef<any>();
    
    // Scale factor for physics elements
    const scale = 0.3;

    // Constants derived from scale
    const maxRadius = 250 * scale;
    const thresh = maxRadius * 0.80;
    const minAngle = 60 * Math.PI / 180.0;
    const maxAngle = 120 * Math.PI / 180.0;
    const topMargin = 0;
    const sceneWidth = thresh * 1.45;
    const sceneHeight = thresh * 1.6;
    const stiffness = 0.55;

    useEffect(() => {
        // ✨ FIX: Create the engine instance and its configuration inside useEffect
        // This ensures a fresh, deterministic engine state on every mount.
        const engine = Engine.create({
            gravity: {y: 1 * scale}, 
            timing: {timeScale: 2} // Set timing here for a fresh start
        });

        const render = Render.create({
            element: scene.current,
            engine: engine, // Use the newly created engine instance
            options: {
                width: sceneWidth,
                height: sceneHeight,
                background: 'transparent',
                wireframeBackground: 'transparent',
                wireframes: false,
            }
            })

        var group = Body.nextGroup(true);
        const curThemeIndex = getCurrentTheme();
        const color = curThemeIndex ? 'white' : 'black';
        
        const constraintRender = {type: 'line', strokeStyle: color, lineWidth: 0.5};

        var topBlock = Bodies.rectangle(sceneWidth/2, topMargin, 10 * scale, 10 * scale, { collisionFilter: { group: group}, isStatic: true, render: {visible: false}});

        var bottomBall = Bodies.circle(sceneWidth/2, 40 * scale + topMargin, 5 * scale, { collisionFilter: { group: group}, render: {fillStyle: color}});

        // The rope is constructed to start in a mostly vertical position
        var rope = Composites.stack(sceneWidth/2, 0, 38 * scale, 1, 10 * scale, 0, function(x, y) {
            return Bodies.rectangle(x, y, 4 * scale, 2 * scale, {collisionFilter: {group: group}, render: {fillStyle: color}});
        });

        Composites.chain(rope, 0.5, 0, -0.5, 0, { stiffness: stiffness, length: 0, render: constraintRender, collisionFilter: { group: group } });

        const topConstraint = Constraint.create({
            bodyA: topBlock,
            bodyB: rope.bodies[0],
            stiffness: stiffness,
            length: 0,
            collisionFilter: { group: group},
            render: constraintRender
        });

        const bottomConstraint = Constraint.create({
            bodyB: bottomBall,
            bodyA: rope.bodies[rope.bodies.length-1],
            pointA: { x: 0, y: 0 },
            pointB: { x: 0, y: 0 },
            stiffness: stiffness,
            length: 0,
            collisionFilter: { group: group},
            render: constraintRender

        });
            
        // Use the local 'engine' variable
        Composite.add(engine.world, [
            topBlock,
            topConstraint,
            rope,
            bottomConstraint,
            bottomBall
        ]);

        const onDown = (event) => {
            const rect = scene.current.getBoundingClientRect();
            if (event.clientX >= bottomBall.bounds.min.x + rect.left - 20 * scale &&
                event.clientX <= bottomBall.bounds.max.x + rect.left + 20 * scale &&
                event.clientY >= bottomBall.bounds.min.y + rect.top - 20 * scale &&
                event.clientY <= bottomBall.bounds.max.y + rect.top + 20 * scale) {
                bottomBall.isStatic = true;
                (bottomBall as any).dragging = true;
                setCursorStyle('cursor-grabbing');
            }
        }

        function switchTheme() {
            const newIndex = (getCurrentTheme() + 1) % themes.length;
            localStorage.setItem("themeIndex", JSON.stringify(newIndex));
            setThemeIndex(newIndex);
            const newColor = newIndex ? 'white' : 'black';
            (topBlock.render as any).fillStyle = newColor;
            (topConstraint.render as any).strokeStyle = newColor;
            (bottomConstraint.render as any).strokeStyle = newColor;
            (bottomBall.render as any).fillStyle = newColor;
            for (const constraint of Composite.allConstraints(rope)) {
                (constraint.render as any).strokeStyle = newColor;
            }
            for (const body of rope.bodies) {
                (body.render as any).fillStyle = newColor;
            }
            bulbRef.current.src = themes[newIndex].assets.bulb;
        }

        const onUp = (event) => {
            if ((bottomBall as any).dragging) {
                (bottomBall as any).dragging = false;
                bottomBall.isStatic = false;
                const dist = distance({X: topBlock.position.x, Y: topBlock.position.y},
                                        {X: bottomBall.position.x, Y: bottomBall.position.y})
                if (dist > thresh) {// Below the relative threshold
                    switchTheme();
                }
                setCursorStyle('cursor-auto');
            }
        }

        const onMove = (event) => {
            const rect = scene.current.getBoundingClientRect();
            if ((bottomBall as any).dragging) {
                const relativeX = event.clientX - rect.left;
                const relativeY = event.clientY - rect.top;
                
                // Calculate angle from the top block to the cursor position
                let angle = Math.atan2(relativeY - topBlock.position.y, relativeX - topBlock.position.x);
                
                // Keep the angle within the allowed range (minAngle to maxAngle relative to vertical)
                // Since the rope hangs down (y increases), we check against PI/2 (vertical)
                const verticalAngle = Math.PI / 2; 

                // Clamp the angle symmetrically around the vertical axis
                if (angle < verticalAngle - (maxAngle - verticalAngle)) {
                    angle = verticalAngle - (maxAngle - verticalAngle);
                } else if (angle > verticalAngle + (maxAngle - verticalAngle)) {
                    angle = verticalAngle + (maxAngle - verticalAngle);
                }

                // Recalculate distance to use for length clamping
                const dist = distance({X: topBlock.position.x, Y: topBlock.position.y},
                                        {X: relativeX, Y: relativeY})
                
                // Clamp the length to maxRadius if the cursor is farther
                const length = dist > maxRadius ? maxRadius : dist;

                // Calculate the new position based on the clamped angle and length
                const newX = topBlock.position.x + Math.cos(angle) * length;
                const newY = topBlock.position.y + Math.sin(angle) * length;

                // Clamp Y position to ensure it's not above the top block (y = topMargin = 0)
                Body.setPosition(bottomBall, {x: newX, y: Math.max(topBlock.position.y, newY)});
                
            } else if (event.clientX >= bottomBall.bounds.min.x + rect.left - 20 * scale &&
                event.clientX <= bottomBall.bounds.max.x + rect.left + 20 * scale &&
                event.clientY >= bottomBall.bounds.min.y + rect.top - 20 * scale &&
                event.clientY <= bottomBall.bounds.max.y + rect.top + 20 * scale) {
                setCursorStyle('cursor-grab');
            } else {
                setCursorStyle('cursor-auto');
            }
        }

        // Use the local 'engine' variable
        Engine.run(engine)
        Render.run(render)
        bulbRef.current.addEventListener('click', switchTheme);
        window.addEventListener('mouseup', onUp);
        window.addEventListener('mousemove', onMove);
        scene.current.addEventListener('mousedown', onDown);
        
        return () => {
            window.removeEventListener('mouseup', onUp);
            window.removeEventListener('mousemove', onMove);
            if (bulbRef.current) {
                bulbRef.current.removeEventListener('click', switchTheme);
            }
            if (scene.current) {
                scene.current.removeEventListener('mousedown', onDown);
            }
            // Cleanup using the local 'engine' variable
            Render.stop(render)
            World.clear(engine.world)
            Engine.clear(engine)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {};
        }
    }, [scale, sceneWidth, sceneHeight, maxRadius, thresh, minAngle, maxAngle, topMargin, setCursorStyle, setThemeIndex]) // Added dependencies
    

    return (
        <div className='flex h-fit flex-col justify-center items-center'>
            <img ref={bulbRef} src={curTheme.assets.bulb} className='w-8 md:w-12 h-auto select-none cursor-pointer' draggable='false'/>
            <div className={'hidden md:inline'} ref={scene}  style={{width: sceneWidth, height: sceneHeight}}></div>
        </div>
    )
}
// Note: The custom memo comparison function is unusual and will prevent updates 
// if any props change, but is kept from your original code.
export default memo(LightBulb, function(x, y){return true;})