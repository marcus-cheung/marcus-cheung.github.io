import React from 'react';

const experiences = [
    {
        company: 'Google',
        title: 'Software Engineer',
        location: 'Mountain View',
        description: 'Privacy Sandbox',
        frameworks: ['Python', 'C++'],
        start: '2024',
        end: 'present'
    },
    {
        company: 'Google',
        title: 'SWE Intern',
        location: 'Mountain View',
        description: <p>
                        AR Experiences. <br/>
                        Optimized an ear landmark ML model for mobile devices, used in virtual try-on and supplementing facial landmarking research.<br/>
                    </p>,
        frameworks: ['Python', 'C++'],
        start: '2023',
        end: '2023'
    },
    {
        company: 'Google',
        title: 'STEP Intern',
        location: 'Mountain View',
        description: 'GPay',
        frameworks: ['Python', 'C++'],
        start: '2023',
        end: '2023'
    },
    {
        company: 'Hanson Robotics',
        title: 'Software Engineer Intern',
        location: 'Mountain View',
        description: 'GPay',
        frameworks: ['Python', 'C++'],
        start: '2023',
        end: '2023'
    },
    {
        company: 'OCON Studios',
        title: 'Research and Development Intern',
        location: 'Mountain View',
        description: 'GPay',
        frameworks: ['Python', 'C++'],
        start: '2023',
        end: '2023'
    }
]




function Projects({curTheme}) {
    function ProjectBlock(experience) {
        return (
            <div className='flex w-10/12 h-fit py-2 hover:bg-sky-900 rounded-md'>
                <div>
                    <p>
                        <strong className={curTheme.colors.text}>{experience.company}</strong>
                        <br/>
                        <i>{experience.title}</i>
                        <br/>
                        {experience.start} – {experience.end}
                        <br/>
                        {experience.description}
                    </p>
                </div>
            </div>
            
        )
    }

    return (
        <div className='w-full h-fit flex flex-col my-24 gap-7'>
            {experiences.map(ProjectBlock)}
        </div>
      );
  };
  export default Projects;