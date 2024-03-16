import React from 'react';


function About({curTheme}) {
  return (
    <div className='w-full h-fit flex flex-col'>
        <img className='w-12' src={curTheme.assets.computer} draggable={false}></img>
        <p>
          Software Engineer @ Google
          <br/>
          Computer Science @ UC Berkeley
          <br/>
          <a className='text-blue-500' href='assets/images/okja.png'>click for resume</a>
        </p>
    </div>
    );
};
export default About;