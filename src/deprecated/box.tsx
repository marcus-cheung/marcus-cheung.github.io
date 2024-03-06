import { useEffect, useRef, useState, memo} from 'react'
import { Engine, Render, Events, Runner, Body, Bodies, World, Composites, Composite, Constraint, Mouse, MouseConstraint} from 'matter-js'
import {Theme, themes} from '../Themes'
interface Props {
    setTheme: any;
  }
  

const HangingChain = function (p: Props){
  const scene = useRef<any>();
  const engine = useRef(Engine.create());
  const [startPos, setStartPos] = useState({});
  const [curTheme, setCurTheme] = useState(0);
  const width = 400;
  const height = 300;

  const visibleWidth = 450;
  const visibleHeight = 350




    useEffect(() => {
        console.log("check")
        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
              width: visibleWidth,
              height: visibleHeight,
            }
          })

        var group = Body.nextGroup(true);

        var topBlock = Bodies.rectangle(width/2, 0, 10, 10, { collisionFilter: { group: group}, isStatic: true, render: {fillStyle: '#ffffff'}})
    
        var bottomBall = Bodies.circle(width/2, 40, 10, { collisionFilter: { group: group}, render: {fillStyle: '#ffffff'}})

    
        var rope = Composites.stack(width/2, 0, 30, 1, 10, 0, function(x, y) {
            return Bodies.rectangle(x, y, 4, 2, { collisionFilter: { group: group} });
        });
    
        Composites.chain(rope, 0.5, 0, -0.5, 0, { stiffness: 0, length: 0, render: { type: 'line', collisionFilter: { group: group }} });
    
    
        const topConstraint = Constraint.create({
            bodyA: topBlock,
            bodyB: rope.bodies[0],
            stiffness: 0,
            length: 3, collisionFilter: { group: group},
            render: {visible: false}
        });
    
        const bottomConstraint = Constraint.create({
            bodyB: bottomBall,
            bodyA: rope.bodies[rope.bodies.length-1],
            stiffness: 0,
            length: 0, collisionFilter: { group: group}
        });
            
        Composite.add(engine.current.world, [
            topBlock,
            topConstraint,
            rope,
            bottomConstraint,
            bottomBall
        ]);

        

        const onUp = (event) => {
            if (bottomBall.dragging) {
                const rect = scene.current.getBoundingClientRect();

                bottomBall.dragging = false;
                bottomBall.static = false;

                if (event.clientY > rect.bottom) {
                    // p.setTheme(1);
                }

            }
        }

        const onDown = (event) => {
            console.log(bottomBall.bounds.min.x);
            console.log(event.clientX)
            if (event.clientX >= bottomBall.bounds.min.x - 10 &&
                event.clientX <= bottomBall.bounds.max.x + 10 &&
                event.clientY >= bottomBall.bounds.min.y - 10 &&
                event.clientY <= bottomBall.bounds.max.y + 30) {
                bottomBall.isStatic = true;
                bottomBall.dragging = true;
            }
        }

        const onMove = (event) => {
            const rect = scene.current.getBoundingClientRect();
            if (bottomBall.dragging) {
                const mouseX = Math.max(rect.left, Math.min(rect.right, event.clientX));
                const mouseY = Math.max(rect.top, Math.min(rect.bottom, event.clientY));;
                Body.setPosition(bottomBall, {x: mouseX, y: mouseY});
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
      <div ref={scene}  style={{width: width, height: height}}/>
    // <button onClick={setTheme}>asdfasdfa</button>
  )
}

export default HangingChain;
// export default memo(HangingChain, function(x, y){return true;})