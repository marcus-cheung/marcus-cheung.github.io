import React from 'react';

const experiences = [
    {
        company: 'Google',
        roles: [
        {
            title: 'SWE L3',
            location: 'Mountain View',
            team: 'Privacy Sandbox',
            frameworks: ['Python', 'C++'],
            start: 'may\'24',
            end: 'future'
        },
        {
            title: 'SWE Intern',
            location: 'Mountain View',
            team: 'AR Experiences',
            frameworks: ['Python', 'C++'],
            start: 'may\'23',
            end: 'aug\'23'
        },
        {
            title: 'STEP Intern',
            location: 'Mountain View',
            team: 'GPay',
            frameworks: ['Python', 'C++'],
            start: 'may\'22',
            end: 'aug\'22'
        }]
    },
    
    
    {
        company: 'Hanson Robotics',
        roles: [
            {title: 'SWE Intern',
        location: 'Mountain View',
        team: '',
        frameworks: ['Python', 'C++'],
        start: 'jun\'21',
        end: 'aug\'21'}]
    },
    {
        company: 'OCON Studios',
        roles: [{title: 'R&D Intern',
        location: 'Mountain View',
        team: '',
        frameworks: ['Python', 'C++'],
        start: 'jun\'18',
        end: 'jul\'18'}]
    }
]




function Work({curTheme}) {
    function Role(role) {
        return (<div>
                    {role.title}
                    <br/>
                    <br/>
                </div> )
    }
    function Timeline(role) {
        return (<div>
            <i>{role.start} - {role.end}</i>
            <br/>
            <br/>
        </div>)
    }
    function ExperienceBlock(experience) {
        return (<div className='flex flex-col w-fit pr-6 h-fit hover:bg-sky-900 rounded-md'>
                    <div className='w-full'>
                        <strong className={`${curTheme.colors.text} text-lg`}>{experience.company}</strong>
                    </div>
                    <div className='flex'>
                    <div className='w-44'>
                        {experience.roles.map(Timeline)}
                    </div>
                    <div className='w-52'>
                        {experience.roles.map(Role)}
                    </div>
                    </div>
                </div>
            
        )
    }

    return (
        <div className='w-full h-fit flex flex-col gap-7'>
            {experiences.map(ExperienceBlock)}
        </div>
      );
  };
  export default Work;