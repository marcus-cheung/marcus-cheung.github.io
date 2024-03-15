import React from 'react';

function Work({curTheme}) {
    return (
        <div className='w-full h-fit flex flex-col gap-7'>

            <div className='flex flex-col w-fit h-fit hover:bg-sky-900 rounded-md'>
                <div className='w-full'>
                    <strong className={`${curTheme.colors.text} text-lg`}>Google</strong>
                </div>
                <div className='flex'>
                    <div className='w-32'>
                        <p>Present</p>
                        <p>2023</p>
                        <p>2022</p>
                    </div>
                    <div className='w-52'>
                        <p>SWE L3</p>
                        <p>SWE Intern</p>
                        <p>STEP Intern</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-fit h-fit hover:bg-sky-900 rounded-md'>
                <div className='w-full'>
                    <strong className={`${curTheme.colors.text} text-lg`}>Hanson Robotics</strong>
                </div>
                <div className='flex'>
                    <div className='w-32'>
                        2021
                    </div>
                    <div className='w-52'>
                        SWE Intern
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-fit h-fit hover:bg-sky-900 rounded-md'>
                <div className='w-full'>
                    <strong className={`${curTheme.colors.text} text-lg`}>OCON Studios</strong>
                </div>
                <div className='flex'>
                    <div className='w-32'>
                        2018
                    </div>
                    <div className='w-52'>
                        R&D Intern
                    </div>
                </div>
            </div>

        </div>
      );
  };
  export default Work;