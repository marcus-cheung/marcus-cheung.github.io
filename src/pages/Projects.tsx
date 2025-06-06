import React, { useRef } from 'react';
import { getCurrentTheme } from '../Helpers';
import FadeIn from '../components/FadeIn';

const projects = [
    {
        title: 'TruckrZzz',
        sticker: 'assets/images/truck.gif',
        link: 'https://devpost.com/software/truckrzzz',
        description: <p>Keep drivers awake by monitoring heart rate and facial expressions.<br/><br/>Treehacks 2023:<br/>🏆 Best Use of Reflex<br/>🏆 Most Commercially Viable Hack</p>,
        frameworks: ['Python', 'Swift', 'dlib', 'OpenCV', 'Reflex', 'TerraAPI']
    },
    {
        title: 'Knewsic',
        sticker: 'assets/images/walkman.gif',
        link: 'https://github.com/marcus-cheung/music_game',
        description: 'Fullstack web app multiplayer music guessing game.',
        frameworks: ['Python', 'Flask', 'Spotify API', 'HTML', 'JavaScript', 'CSS', 'Heroku']
    },
    {
        title: 'Tetris Genetic Algorithm',
        sticker: 'assets/images/tetris.gif',
        link: 'https://github.com/marcus-cheung/tetris_bot',
        description: 'Produced agent with a 0% loss rate.',
        frameworks: ['Python', 'Pyglet', 'NumPy', 'pickle']
    },
    {
        title: 'SPAC Data Scraper',
        sticker: 'assets/images/stocks.gif',
        link: 'https://github.com/marcus-cheung/SPACbot',
        description: 'Scrapes web for SPAC stock metrics and sentiment.',
        frameworks: ['Python', 'Pyglet', 'NumPy', 'pickle']
    },
    {
        title: 'Secure File Sharing',
        sticker: 'assets/images/file.gif',
        link: 'https://github.com/marcus-cheung/File-Sharing',
        description: 'RSA encryption/signatures, HMAC, and block ciphers.',
        frameworks: ['Python', 'Pyglet', 'NumPy', 'pickle']
    },
]


function Projects({curTheme}) {
    function framework(framework) {
        return (
            <div className='px-1 py-1 rounded border text-xs'>
                {framework}
            </div>
        )
    }

    function Project(project) {
        return (
            <FadeIn bgStyle={`${curTheme.colors.highlight} rounded group`}>
                <a className={`w-full h-fit`} href={project.link} target='_blank'>
                    <div className={`w-full flex md:px-0 duration-100 transition-transform hover:-translate-y-2 hover:-translate-x-2 px-3 py-4 ${curTheme.colors.bg} border-2 ${curTheme.colors.border} py-2 rounded`}>
                        <div className='hidden px-2 md:inline w-24 min-w-24 flex justify-center pr-4 items-center'>
                            <img className= 'h-16 max-w-16 relative' src={project.sticker} draggable='false'></img>
                        </div>
                        <div className='flex flex-col w-fit h-fit'>
                            <b className='mb-2 group-hover:text-orange-500'>{project.title}</b>
                            <p>{project.description}</p>
                            <div className='flex pt-4 gap-x-2 gap-y-1 flex-wrap'>
                                {project.frameworks.map(framework)}
                            </div>
                        </div>
                    </div>
                </a> 
            </FadeIn>
        )
    }

    return (
        <div className='w-full h-fit flex flex-col justify-center gap-6 text-base md:text-lg'>
            <FadeIn>
                <strong className='flex justify-center text-5xl mb-6'>PROJECTS</strong>
            </FadeIn>
            {projects.map(Project)}
        </div>
      );
  };

export default Projects;