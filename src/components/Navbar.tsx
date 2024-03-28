import React, {useState, useEffect} from 'react';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';
import Mole from './Mole'


function Social({url, image}) {
  return(<a className={'w-9 h-9 cursor-pointer bg-no-repeat hover:bg-contain hover:bg-center'} style={{backgroundImage: `url(assets/images/highlight.png)`}} href={url} target="_blank">
          <img src={image} className='w-9 h-9 min-w-9 min-h-9 object-cover top-0 left-0 select-none' draggable={false}/>
        </a>
    )
}

//ff8c00
function Navbar({curTheme}) {
  function ButtonStyle({route, element}) {
    return (<ScrollLink
            activeClass="active"
            to={route}
            spy={true}
            smooth={'easeInOutQuart'}
            duration={100}>
              <div onClick={() => {window.location.href = route;}} className='relative cursor-pointer w-fit group flex text-xl'> 
                <div className={'absolute left-[-24px] w-6 h-6 text-xl flex items-center bg-no-repeat group-hover:bg-contain'}
                  style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                </div>
                {element}
              </div>
              
            </ScrollLink>)
  }
  return (
    <nav className={`w-11/12 z-10 md:sticky top-0 ${curTheme.colors.text} md:mr-6 md:w-3/12 max-h-screen md:flex md:flex-col md:justify-between pt-12 md:pt-20 md:pb-52 md:pt-24`}>
      <div>
        <p>
          <strong className='text-5xl'>MARCUS CHEUNG</strong>
        </p>

        <div className={'md:mt-16 mt-4 flex md:flex-col justify-between mb-2'}>
          <ButtonStyle route='#about' element={<strong>ABOUT</strong>}></ButtonStyle>
          <ButtonStyle route='#work' element={<strong>WORK</strong>}></ButtonStyle>
          <ButtonStyle route='#projects' element={<strong>PROJECTS</strong>}></ButtonStyle>
          <ButtonStyle route='#mole' element={<strong>MONTY?</strong>}></ButtonStyle>
        </div>
      </div>
      
        
      <div className={'flex gap-4 justify-start'}>
        <Social url='mailto: cheung.marcus@gmail.com' image={curTheme.assets.email}></Social>
        <Social url='https://www.linkedin.com/in/marcusjcheung/' image={curTheme.assets.linkedin}></Social>
        <Social url='https://github.com/marcus-cheung' image={curTheme.assets.github}></Social>
      </div>
       
    </nav>
  );
};

export default Navbar;
        