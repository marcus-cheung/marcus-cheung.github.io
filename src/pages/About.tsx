import React from 'react';


function About({curTheme}) {
  return (
    <div className='w-full h-fit flex flex-col'>
        <img className='h-52 w-48' src='assets/images/icons/frog+skinny.png'></img>
        <br/>
        <p className='text-xl'>
          Software Engineer @ Google
          <br/>
          Computer Science @ UC Berkeley
          <br/>
          <a className='text-blue-500' href='assets/images/okja.png'>Click for resume</a>
          <br></br>
        </p>
    </div>
    );
};
export default About;