import React from 'react';


function About({curTheme}) {
  return (
    <div className='w-full h-fit flex flex-col py-24 gap-7 pb-40'>
        <p className='text-2xl'>
          I'm a software engineer working at Google.
          <br/>
          <a className='text-blue-500' href='assets/images/okja.png'>Click for Resume</a>
        </p>
    </div>
    );
};
export default About;