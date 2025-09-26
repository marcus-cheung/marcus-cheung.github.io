import React from 'react';


function About({curTheme}) {
  return (
    <div className='bg-face w-full h-fit pt-14 md:pt-20 flex-col flex gap-4'>
      <img className='h-56 max-w-56 md:h-80 md:max-w-80 relative mx-auto' src={curTheme.assets.pfp}></img>
      <div className='flex-col flex justify-center'></div>
      <p className="text-2xl md:text-3xl w-full">
        Hi, I'm a software engineer at{" "}
        <b className={`${curTheme.colors.textHighlight} cursor-[url('../public/assets/images/android_cursor.png')_18_18,_auto]`}>
          Google
        </b>
        {". "} I also recently graduated from{" "}
        <b className={`whitespace-nowrap ${curTheme.colors.textHighlight} cursor-[url('../public/assets/images/oski.png')_16_16,_auto]`}>
          UC Berkeley
        </b> with a bachelors in Computer Science.
        <br />
        <br />
        <span>
        Keep scrolling to learn more about me <div onClick={() => {window.location.href = '#work';}} className='cursor-pointer inline-block'>↓</div>
        </span>
      
      </p>

    </div>
    );
};
export default About;