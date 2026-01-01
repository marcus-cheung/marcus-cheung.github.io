import React, { useRef } from 'react';
import FadeIn from '../components/FadeIn';

const experiences = [
    {   
        company: 'GOOGLE',
        roles: [
            {
                link: 'https://blog.google/technology/ai/google-private-ai-compute/',
                year: 'Curr.',
                title: 'SWE  »  Encrypted Zone',
                description: 'Private inference for Gemini.',
                frameworks: []
                
            },
            {
                // link: '',
                year: '2025',
                title: 'SWE  »  Memento',
                description: 'Long context agentic AI.',
                frameworks: []
                
            },
            {
                link: 'https://privacysandbox.com/',
                year: '2024·25',
                title: 'SWE  »  Private Model Training',
                description: 'Private model training.',
                frameworks: []
                
            },
            {
                link: 'https://arvr.google.com/',
                year: '2023',
                title: 'SWE Intern » AR Experiences',
                description: 'CVML for virtual try-on.',
                frameworks: ['Python', 'C++', 'OpenCV', 'TensorFlow', 'MediaPipe', 'blaze']
            },
            {
                link: 'https://pay.google.com/about/',
                year: '2022',
                title: 'STEP Intern » GPay',
                description:'Sandbox testing for mobile drivers license.',
                frameworks: ['Java', 'Protocol Buffers', 'JSON']
            }
        ]
    },
    {
        company: 'HANSON ROBOTICS',
        roles: [
            {
                link: 'https://www.hansonrobotics.com/',
                year: '2021',
                title: 'SWE Intern',
                description: 'Computer vision for human reidentification.',
                frameworks: ['Python', 'OpenCV', 'NumPy', 'ROS', 'rospy', 'Blenderpy']
            },
        ]
    },
    {
        company: 'THE2H',
        roles: [
            {
                link: 'https://www.the2h.com/',
                year: '2018',
                title: 'R&D Intern',
                description: 'Volumetric video and AR research.',
                frameworks: []
            },
        ]
    },
]


function Work({curTheme}) {

    function framework(framework) {
        return (
            <div className='px-1 py-1 rounded border text-xs'>
                {framework}
            </div>
        )
    }

    function Role(role) {
        return (
            <FadeIn bgStyle={`${curTheme.colors.highlight} rounded group`}>
                <a className={`w-full h-fit`} href={role.link} target='_blank'>
                    <div className={`w-full flex-col md:flex-row flex duration-100 transition-transform hover:-translate-y-2 hover:-translate-x-2 px-3 md:px-2 py-4 ${curTheme.colors.bg} border-2 ${curTheme.colors.border} py-2 rounded`}>
                        <div className={`w-24 min-w-24 ${curTheme.colors.textHoverHighlight} mb-2`}>
                            <strong>{role.year}</strong>   
                        </div>
                        <div className='flex flex-grow flex-col'>
                            <strong className={`${curTheme.colors.textHoverHighlight}`}>{role.title}</strong>   
                            <p>{role.description}</p>
                            {/* <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                {role.frameworks.map(framework)}
                            </div> */}
                        </div>
                    </div>
                </a>
            </FadeIn>
        )
    }

    
    
    function Experience(experience) {
        return (
            <div className='flex flex-col h-fit rounded w-full'>
                <FadeIn><b className='flex text-xl mb-2 w-fit'>{experience.company}</b></FadeIn>
                <div className='flex flex-col gap-4'>
                    {experience.roles.map(Role)}
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-fit flex flex-col gap-8 text-base md:text-lg items-center'>
            <FadeIn><b className='flex justify-center text-5xl'>WORK</b></FadeIn>
            {experiences.map(Experience)}
        </div>
      );
  };

export default Work;