import React from 'react';


function About({curTheme}) {
  return (
    <div className='bg-face w-full h-fit pt-16 md:pt-52 flex flex-col gap-4'>
      <div>
        <p className='text-2xl'>
          <p className='text-3xl'>Hi!</p><br/>

          I'm a software engineer at&nbsp;
          <b className={`whitespace-nowrap ${curTheme.colors.textHighlight} cursor-[url('../public/assets/images/android_cursor.png')_18_18,_auto]`}>
          Google
          </b>
          &nbsp;working on <span className='whitespace-nowrap'>private model training.</span> I recently graduated from&nbsp;
          <b className={`whitespace-nowrap ${curTheme.colors.textHighlight} cursor-[url('../public/assets/images/oski.png')_16_16,_auto]`}>
          UC Berkeley
          </b>
          &nbsp;with a bachelors in Computer Science.
        </p>
        <br/>
        <p className='text-2xl'>
          That's all, have fun exploring my website!
        </p>
      </div>
      
    </div>
    );
};
export default About;