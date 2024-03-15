import React from 'react';
import Mole from '../components/Mole'


function About({curTheme}) {
  return (
    <div className='w-full h-fit flex flex-col'>
        <img className='w-16' src={curTheme.assets.computer}></img>
        <p className='text-xl'>
          Software Engineer @ Google
          <br/>
          Computer Science @ UC Berkeley
          <br/>
          <a className='text-blue-500' href='assets/images/okja.png'>Click for resume</a>
        </p>
    </div>
    );
};
export default About;