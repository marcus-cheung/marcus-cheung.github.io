import React, { useRef } from 'react';

const experiences = [
    {
        stamp: 'assets/images/gstamp1.png',
        link: 'https://about.google/',
        roles: [
            {
                year: '2024',
                title: 'SWE L3',
                description:<div>
                                <a className='text-blue-500' href='https://privacysandbox.com/' target='_blank'>Privacy Sandbox</a>
                                <br/>
                                Incoming.
                            </div>,
                frameworks: ['TypeScript', 'HTML', 'React', 'Node.js', 'Next.js', 'Tailwind CSS']
                
            },
            {
                year: '2023',
                title: 'SWE Intern',
                description:<div>
                                <a className='text-blue-500' href='https://arvr.google.com/' target='_blank'>AR Experiences</a>
                                <br/>
                                Optimized an ear landmark ML model for mobile devices, used in virtual try-on and to supplement facial landmarking research.
                            </div>,
                frameworks: ['Python', 'C++', 'OpenCV', 'CUDA', 'TensorFlow', 'PIL', 'Pandas', 'Matplotlib', 'Colab', 'MediaPipe', 'NumPy', 'abseil', 'blaze']
            },
            {
                year: '2022',
                title: 'STEP Intern',
                description:<div>
                                <a className='text-blue-500' href='https://pay.google.com/about/' target='_blank'>GPay</a>
                                <br/>
                                Streamlined external API integration, resulting in the deprecation of magic value-based sandboxing and greater testing coverage.
                            </div>,
                frameworks: ['Java', 'Protocol Buffers', 'JSON']
            }
        ]
    },
    {
        stamp: 'assets/images/hanson_stamp.png',
        link: 'https://www.hansonrobotics.com/',
        roles: [
            {
                year: '2021',
                title: 'SWE Intern',
                description: 'Developed a short-term human reidentification computer vision algorithm on top of a camera-embedded deep-learning system.',
                frameworks: ['Python', 'OpenCV', 'NumPy', 'ROS', 'rospy', 'Blenderpy']
            },
        ]
    },
    {
        stamp: 'assets/images/the2h_stamp.gif',
        link: 'https://www.the2h.com/',
        roles: [
            {
                year: '2018',
                title: 'R&D Intern',
                description: 'Conducted research on free-viewpoint volumetric video, AR occlusion, motion capture techniques, and adjacent technical subjects.',
                frameworks: []
            },
        ]
    },
]


function Work({curTheme}) {

    function Role(role) {
        return (
            <div className='flex flex-col'>
                <div className={'w-full flex border-b border-slate-400 border-dashed'}>
                    <div className='w-32'>
                        {role.year}
                    </div>
                    {role.title}
                </div>
                <div className='w-full flex text-sm'>
                    <div className='ml-32 w-full'>
                        {role.description}
                        <div className='flex pt-4 gap-x-2 flex-wrap'>
                            {role.frameworks.map(function(x){return <div className='flex items-center rounded-full'>{x}</div>})}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
    
    function Experience(experience) {
        return (
            <div className='flex flex-col gap-6 w-fit h-fit'>
                <a className={`relative w-fit hover:bottom-1`} href={experience.link} target='_blank'>
                    <img className= 'w-20' src={experience.stamp} draggable='false'></img>
                </a>
                {experience.roles.map(Role)}
            </div>
        )
    }

    return (
        <div className='w-full h-fit flex flex-col gap-12 text-lg bg-transparent'>
            <p>Places I've worked at. Click to learn more! </p>
            {experiences.map(Experience)}
        </div>
      );
  };

export default Work;