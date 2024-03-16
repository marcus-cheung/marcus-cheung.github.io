import React from 'react';

const hover = <div className={'absolute left-[-24px] w-6 h-6 text-xl flex items-center bg-no-repeat group-hover:bg-contain'}
                style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                </div>

const lineStyle = 'group cursor-pointer flex relative';

function Work({curTheme}) {
    return (
        <div className='w-full h-fit flex flex-col gap-6 text-lg'>
            <p>These are all the places i've worked so far.<br/>click on an experience to learn more!</p>
            <div className='flex flex-col w-fit h-fit'>
                <div className='w-full'>
                    <strong className={`${curTheme.colors.text}`}>GOOGLE</strong>
                </div>
                <a className={lineStyle} href='https://privacysandbox.com/' target="_blank">
                    {hover}
                    <div className='w-36'>
                        incoming
                    </div>
                    <div className='w-70'>
                        swe l3
                    </div>
                </a>
                <a className={lineStyle} href='https://arvr.google.com/' target="_blank">
                    {hover}
                    <div className='w-36'>
                        2023
                    </div>
                    <div className='w-70'>
                        swe intern
                    </div>
                </a>
                <a className={lineStyle} href='https://pay.google.com/about/' target="_blank">
                    {hover}
                    <div className='w-36'>
                        2022
                    </div>
                    <div className='w-70'>
                        step intern
                    </div>
                </a>
            </div>

            <div className='flex flex-col w-fit h-fit'>
                <div className='w-full'>
                    <strong className={`${curTheme.colors.text}`}>HANSON ROBOTICS</strong>
                </div>
                <a className={lineStyle} href='https://www.hansonrobotics.com/' target="_blank">
                    {hover}
                    <div className='w-36'>
                        2021
                    </div>
                    <div className='w-70'>
                        swe intern
                    </div>
                </a>
            </div>

            <div className='flex flex-col w-fit h-fit'>
                <div className='w-full'>
                    <strong className={`${curTheme.colors.text}`}>THE2H</strong>
                </div>
                <a className={lineStyle} href='https://www.the2h.com/' target="_blank">
                    {hover}
                    <div className='w-36'>
                        2018
                    </div>
                    <div className='w-70'>
                        r&d intern
                    </div>
                </a>
            </div>

        </div>
      );
  };
  export default Work;