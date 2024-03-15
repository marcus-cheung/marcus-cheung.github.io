import React from 'react';
import Mole from '../components/Mole'


function About({curTheme}) {
  return (
    <div className='w-full h-fit flex flex-col'>
        <img className='w-12' src={curTheme.assets.computer} draggable={false}></img>
        <p className='text-lg'>
          Software Engineer @ Google
          <br/>
          Computer Science @ UC Berkeley
          <br/>
          <a className='text-base text-blue-500' href='assets/images/okja.png'>Click for resume</a>
        </p>
    </div>
    );
};
export default About;