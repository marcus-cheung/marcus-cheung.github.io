import React from 'react';


function About({curTheme}) {
  return (
    <div className='w-fit h-fit flex flex-col gap-4'>
        {/* <img className='w-80' src='assets/images/homepage.gif'></img> */}
        <p>
          Software Engineer @ Google
          <img className="inline-flex items-baseline w-6 h-6 self-center ml-2 mb-1" src="assets/images/icons/droid.png" alt=""/>
          <br/>
          Computer Science @ UC Berkeley
          <img className="inline-flex items-baseline w-6 self-center ml-2 mb-1" src="assets/images/icons/oski.gif" alt=""/>
          <br/>
          <a className='text-blue-500' href='assets/images/okja.png'>Resume</a>
        </p>
    </div>
    );
};
export default About;