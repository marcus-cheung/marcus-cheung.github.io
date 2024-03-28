import React from 'react';

const hover = <div className={'absolute left-[-24px] w-6 h-6 text-xl flex items-center bg-no-repeat group-hover:bg-contain'}
                style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                </div>

const lineStyle = 'group cursor-pointer flex relative';

function Work({curTheme}) {
    return (
        <div className='rounded-lg h-fit w-fit'>
            <div className='w-full h-fit flex flex-col gap-8 text-lg bg-transparent'>
            <p>Places I've worked at.<br/>Click to learn more! </p>
            <div className='flex flex-col w-fit h-fit'>
                <img className= 'w-20' src='assets/images/gstamp1.png'></img>
                <a className={lineStyle} href='https://privacysandbox.com/' target="_blank">
                    {hover}
                    <div className='w-32'>
                        incoming
                    </div>
                    <div className='w-70'>
                        swe l3
                    </div>
                </a>
                <a className={lineStyle} href='https://arvr.google.com/' target="_blank">
                    {hover}
                    <div className='w-32'>
                        2023
                    </div>
                    <div className='w-70'>
                        swe intern
                    </div>
                </a>
                <a className={lineStyle} href='https://pay.google.com/about/' target="_blank">
                    {hover}
                    <div className='w-32'>
                        2022
                    </div>
                    <div className='w-70'>
                        step intern
                    </div>
                </a>
            </div>
            <div className='flex flex-col w-fit h-fit'>
                <div className='w-full'>
                    <img className= 'w-20' src='assets/images/hanson_stamp.png'></img>

                </div>
                <a className={lineStyle} href='https://www.hansonrobotics.com/' target="_blank">
                    {hover}
                    <div className='w-32'>
                        2021
                    </div>
                    <div className='w-70'>
                        swe intern
                    </div>
                </a>
            </div>

            <div className='flex flex-col w-fit h-fit'>
                <div className='w-full'>
                <img className= 'w-20' src='assets/images/the2h_stamp.gif'></img>

                </div>
                <a className={lineStyle} href='https://www.the2h.com/' target="_blank">
                    {hover}
                    <div className='w-32'>
                        2018
                    </div>
                    <div className='w-70'>
                        r&d intern
                    </div>
                </a>
            </div>
        </div>
        

            

        </div>
      );
  };
  export default Work;