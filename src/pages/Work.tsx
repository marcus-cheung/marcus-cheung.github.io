import React, { useRef } from 'react';
import FadeIn from '../components/FadeIn';

const experiences = [
    {   
        company: 'GOOGLE',
        roles: [
            {
                link: 'https://privacysandbox.com/',
                image: 'assets/images/gstamp1.png',
                year: '2024',
                title: 'SWE L3  »  Privacy Sandbox',
                description: 'Incoming.',
                frameworks: []
                
            },
            {
                link: 'https://arvr.google.com/',
                image: 'assets/images/gstamp1.png',
                year: '2023',
                title: 'SWE Intern » AR Experiences',
                description: 'Optimized an ear landmark ML model for mobile devices, used in virtual try-on and to supplement facial landmarking research.',
                frameworks: ['Python', 'C++', 'OpenCV', 'CUDA', 'TensorFlow', 'MediaPipe', 'blaze']
            },
            {
                link: 'https://pay.google.com/about/',
                image: 'assets/images/gpay_stamp.gif',
                year: '2022',
                title: 'STEP Intern » GPay',
                description:'Streamlined external API integration, resulting in the deprecation of magic value-based sandboxing and greater testing coverage.',
                frameworks: ['Java', 'Protocol Buffers', 'JSON']
            }
        ]
    },
    {
        company: 'HANSON ROBOTICS',
        roles: [
            {
                link: 'https://www.hansonrobotics.com/',
                image: 'assets/images/hanson_stamp.png',
                year: '2021',
                title: 'SWE Intern',
                description: 'Developed a short-term human reidentification computer vision algorithm on top of a camera-embedded deep-learning system.',
                frameworks: ['Python', 'OpenCV', 'NumPy', 'ROS', 'rospy', 'Blenderpy']
            },
        ]
    },
    {
        company: 'THE2H',
        roles: [
            {
                link: 'https://www.the2h.com/',
                image: 'assets/images/the2h_stamp.gif',
                year: '2018',
                title: 'R&D Intern',
                description: 'Conducted research on free-viewpoint volumetric video, AR occlusion, motion capture techniques, and adjacent technical subjects.',
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
                    <div className={`w-full flex duration-100 hover:-translate-y-2 hover:-translate-x-2 px-2 py-4 ${curTheme.colors.bg} border-2 ${curTheme.colors.border} py-2 rounded`}>
                        <div className='w-24 min-w-24 group-hover:text-orange-500'>
                            <strong>{role.year}</strong>   
                        </div>
                        <div className='w-full flex flex-col'>
                            <strong className='group-hover:text-orange-500'>{role.title}</strong>   
                            <p>{role.description}</p>
                            <div className='flex gap-4 flex-wrap'>
                                {role.frameworks.map(framework)}
                            </div>
                        </div>
                    </div>
                </a>
            </FadeIn>
        )
    }

    
    
    function Experience(experience) {
        return (
            <div className='flex flex-col w-fit h-fit rounded'>
                <FadeIn><b className='flex text-lg mb-2 w-fit'>{experience.company}</b></FadeIn>
                <div className='flex flex-col gap-4'>
                    {experience.roles.map(Role)}
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-fit flex flex-col gap-8 text-lg'>
            <FadeIn><b className='flex justify-center text-5xl'>WORK</b></FadeIn>
            {experiences.map(Experience)}
        </div>
      );
  };

export default Work;