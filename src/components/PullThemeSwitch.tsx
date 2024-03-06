import { useEffect, useRef, useState, memo} from 'react'
import { Engine, Render, Body, Bodies, World, Composites, Composite, Constraint} from 'matter-js'
import {themes} from '../Themes'
import { getCurrentTheme, distance } from '../Helpers'


interface Props {
    setTheme: any;
    // width: number;
    // height: number;
  }
  

const PullThemeSwitch = function (props: Props){
  const scene = useRef<any>();
  const scale = 0.3;

  const engine = useRef(Engine.create({gravity: {y: 1.5 * scale}, time: {timeScale: 1.5}}));
  const maxRadius = 250 * scale;
  const thresh = maxRadius * 0.80;

  const minAngle = 60 * Math.PI / 180.0;
  const maxAngle = 120 * Math.PI / 180.0;

  const sceneWidth = thresh * 2.4;
  const sceneHeight = thresh * 1.5;

    useEffect(() => {
        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: sceneWidth,
                height: sceneHeight,
                background: 'transparent',
                wireframeBackground: 'transparent',
                
            }
          })

        var group = Body.nextGroup(true);

        var topBlock = Bodies.rectangle(sceneWidth/2, 0, 10 * scale, 10 * scale, { collisionFilter: { group: group}, isStatic: true, render: {fillStyle: '#808080'}})
    
        var bottomBall = Bodies.circle(sceneWidth/2, 40 * scale, 10 * scale, { collisionFilter: { group: group}, render: {fillStyle: '#808080'}})
    
        var rope = Composites.stack(sceneWidth/2, 0, 14 * scale, 1, 10 * scale, 0, function(x, y) {
            return Bodies.rectangle(x, y, 4 * scale, 2 * scale, { collisionFilter: { group: group} });
        });
    
        Composites.chain(rope, 0.5, 0, -0.5, 0, { stiffness: 0, length: 0, render: { type: 'line', collisionFilter: { group: group }} });
    
        const topConstraint = Constraint.create({
            bodyA: topBlock,
            bodyB: rope.bodies[0],
            stiffness: 0,
            length: 0,
            collisionFilter: { group: group},
            render: {visible: false}


        });
    
        const bottomConstraint = Constraint.create({
            bodyB: bottomBall,
            bodyA: rope.bodies[rope.bodies.length-1],
            pointA: { x: 0, y: 0 },
            pointB: { x: 0, y: 0 },
            stiffness: 0.05,
            length: 0,
            collisionFilter: { group: group},
            render: {type: 'string',
                    anchors: false}

        });
            
        Composite.add(engine.current.world, [
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
                bottomBall.dragging = true;
            }
        }

        const onUp = (event) => {
            const rect = scene.current.getBoundingClientRect();
            if (bottomBall.dragging) {
                bottomBall.dragging = false;
                bottomBall.isStatic = false;
                const dist = distance({X: topBlock.position.x, Y: topBlock.position.y},
                                        {X: bottomBall.position.x, Y: bottomBall.position.y})
                if (dist > thresh) {// Below the relative threshold
                    const newIndex = (getCurrentTheme() + 1) % themes.length
                    localStorage.setItem("themeIndex", JSON.stringify(newIndex));
                    props.setTheme(newIndex);
                }
            }
        }

        const onMove = (event) => {
            const rect = scene.current.getBoundingClientRect();
            if (bottomBall.dragging) {
                const relativeX = event.clientX - rect.left;
                const relativeY = event.clientY - rect.top;
                // console.log(relativeX);
                // compute angle
                console.log(Math.atan2(relativeY - topBlock.position.y, relativeX - topBlock.position.x))
                const angle = Math.max(minAngle, Math.min(maxAngle, Math.abs(Math.atan2(relativeY - topBlock.position.y, relativeX - topBlock.position.x))));
                const dist = distance({X: topBlock.position.x, Y: topBlock.position.y},
                    {X: relativeX, Y: relativeY})
                const tooFar = dist > maxRadius;
                // console.log(tooFar);
                // console.log(angle)
                const newX = topBlock.position.x + Math.cos(angle) * (tooFar? maxRadius : dist);
                const newY = Math.max(0, topBlock.position.y + Math.sin(angle) * (tooFar? maxRadius : dist));
                
                Body.setPosition(bottomBall, {x: newX, y: newY});
            }
        }
    
        Engine.run(engine.current)
        Render.run(render)

        window.addEventListener('mouseup', onUp);
        window.addEventListener('mousemove', onMove);
        scene.current.addEventListener('mousedown', onDown);
        return () => {
            window.removeEventListener('mouseup', onUp);
            window.removeEventListener('mousemove', onMove);
            scene.current.removeEventListener('mousedown', onDown);
            Render.stop(render)
            World.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {};
            
        }
    })

  return (
      <div ref={scene}  style={{width: sceneWidth, height: sceneHeight}}/>
  )
}
export default memo(PullThemeSwitch, function(x, y){return true;})