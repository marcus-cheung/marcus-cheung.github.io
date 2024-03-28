import React, { useRef } from 'react';
import { getCurrentTheme } from '../Helpers';

const experiences = [
    {
        stamp: 'assets/images/gstamp1.png',
        link: 'https://about.google/',
        roles: [
            {
                year: '2024',
                title: 'swe L3',
                description:<div>
                                <a className='text-blue-500' href='https://privacysandbox.com/' target='_blank'>Privacy Sandbox</a>
                                <br/>
                                Haven't started yet.
                            </div>
                
            },
            {
                year: '2023',
                title: 'swe intern',
                description: <div>
                                <a className='text-blue-500' href='https://arvr.google.com/' target='_blank'>AR Experiences</a>
                                <br/>
                                Optimized an ear landmark ML model for mobile devices, used in virtual try-on and supplementing facial landmarking research.
                            </div>
            },
            {
                year: '2022',
                title: 'step intern',
                description: <div>
                                <a className='text-blue-500' href='https://pay.google.com/about/' target='_blank'>GPay</a>
                                <br/>
                                Streamlined external API integration, resulting in the deprecation of magic value-based sandboxing and greater testing coverage.
                            </div>
            }
        ]
    },
    {
        stamp: 'assets/images/hanson_stamp.png',
        link: 'https://www.hansonrobotics.com/',
        roles: [
            {
                year: '2021',
                title: 'swe intern',
                description: 'Developed a short-term human reidentification computer vision algorithm on top of a camera-embedded deep-learning system.'
            },
        ]
    },
    {
        stamp: 'assets/images/the2h_stamp.gif',
        link: 'https://www.the2h.com/',
        roles: [
            {
                year: '2018',
                title: 'r&d intern',
                description: 'Conducted research on free-viewpoint volumetric video, AR occlusion, motion capture techniques, and adjacent technical subjects.'
            },
        ]
    },
]


function Work({curTheme}) {

    function Role(role) {
        const hiddenRef = useRef<any>();
        function onClick() {
            hiddenRef.current.style.display=hiddenRef.current.style.display == 'block' ? 'none' : 'block';
        }
        return (
            <div>
                <a className={'group cursor-pointer flex relative'} onClick={onClick}>
                    <div className={'absolute left-[-30px] w-6 h-6 text-xl flex items-center bg-no-repeat bg-auto group-hover:bg-contain'}
                        style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                    </div>
                    <div className='w-32'>
                        {role.year}
                    </div>
                    <div className='w-70'>
                        {role.title}
                    </div>
                </a>
                <div className={`hidden pl-32 ${curTheme.colors.text2}`} ref={hiddenRef}>{role.description}</div>
            </div>
            
        )
    }
    
    function Experience(experience) {
        return (
            <div className='flex flex-col gap-4 w-fit h-fit'>
                <a className={`${curTheme.colors.hover} w-fit`} href={experience.link} target='_blank'>
                    <img className= 'w-20' src={experience.stamp}></img>
                </a>
                {experience.roles.map(Role)}
            </div>
        )
    }


    return (
        <div className='w-full h-fit flex flex-col gap-12 text-lg bg-transparent'>
            <p>Places I've worked at.<br/>Click to learn more! </p>
            {experiences.map(Experience)}
        </div>
      );
  };

export default Work;