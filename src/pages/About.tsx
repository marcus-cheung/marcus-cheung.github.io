import React from 'react';


function About({curTheme}) {
  return (
    <div className='bg-face w-full h-fit pt-12 md:pt-20 flex-col flex gap-4'>
      <img className='h-56 max-w-56 md:h-80 md:max-w-80 relative mx-auto' src='assets/images/pfp_trim.png'></img>
      <div className='flex-col flex justify-center'></div>
      <p className="text-2xl md:text-3xl w-full">
        Hi. I'm a software engineer at{" "}
        <b className={`${curTheme.colors.textHighlight} cursor-[url('../public/assets/images/android_cursor.png')_18_18,_auto]`}>
          Google
        </b>
        {" "}working on private model training. I received my bachelors in Computer Science from{" "}
        <b className={`whitespace-nowrap ${curTheme.colors.textHighlight} cursor-[url('../public/assets/images/oski.png')_16_16,_auto]`}>
          UC Berkeley
        </b>.
        <br />
        <br />
        Keep scrolling to learn more about me!
      </p>

    </div>
    );
};
export default About;