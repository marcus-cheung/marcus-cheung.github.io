import React from 'react';


function About({curTheme}) {
  return (
    <div className='bg-face w-full h-fit pt-8 md:pt-20 flex flex-col gap-4'>
      <img src='assets/images/wave.gif' className='w-72 mx-auto'></img>
      <div>
        <p className='text-2xl'>
          <p className='text-3xl'>Hi!</p><br/>

          I'm currently a software engineer at&nbsp;
          <b className="whitespace-nowrap text-orange-500 cursor-[url('../public/assets/images/android_cursor.png'),_auto]">
          Google
          </b>
          &nbsp;working on <span className='whitespace-nowrap'>The Privacy Sandbox.</span> I recently graduated from&nbsp;
          <b className="whitespace-nowrap text-orange-500 cursor-[url('../public/assets/images/oski.png'),_auto]">
          UC Berkeley
          </b>
          &nbsp;with a bachelors in Computer Science.
        </p>
        <br/>
        <p className='text-2xl'>
          That's all, have fun exploring my website!
        </p>
      </div>
      
      {/* <a className='text-orange-500' href='assets/images/okja.png' target='_blank'>Resume</a> */}
    </div>
    );
};
export default About;