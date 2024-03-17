import React from 'react';

const hover = <div className={'absolute left-[-24px] w-6 h-6 text-xl flex items-center bg-no-repeat group-hover:bg-contain'}
                style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                </div>

const divStyle = 'flex flex-col relative group cursor-pointer w-fit h-fit';

function Projects({curTheme}) {

    return (
        <div className='w-full h-fit flex flex-col gap-4'>
            <p>Some of the projects i've worked on.</p>
            <a className={divStyle} href='https://devpost.com/software/truckrzzz' target="_blank">
                {hover}
                <strong className={`${curTheme.colors.text}`}>TRUCKRZZZ</strong>
                <div className='w-32 flex items-center pr-4'>
                    <img className='block h-auto' src='assets/images/truckrzzz.png'></img>
                </div>
                <a >
                    <div className='w-32'>
                    </div>
                    <div className='w-70'>
                        Keeping Truck drivers awake.
                    </div>
                </a>
            </a>
            <div className={divStyle}>
                {hover}
                <strong className={`${curTheme.colors.text}`}>KNEWSIC</strong>
                <div className='w-32 flex items-center pr-4'>
                    <img className='block h-auto' src='assets/images/knewsic.png'></img>
                </div>
                <a href='https://devpost.com/software/truckrzzz' target="_blank">
                    <div className='w-32'>
                    </div>
                    <div className='w-70'>
                        Keeping Truck drivers awake.
                    </div>
                </a>
            </div>
        </div>
      );
  };
  export default Projects;