import React, {useState, useEffect} from 'react';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';
import Mole from './Mole'


function Social({url, image}) {
  return(<div className={'w-9 h-9 cursor-pointer bg-no-repeat hover:bg-contain hover:bg-center'} style={{backgroundImage: `url(assets/images/highlight.png)`}} onClick={() => {window.open(url, '_blank')!.focus()}}>
          <img src={image} className='w-9 h-9 min-w-9 min-h-9 object-cover top-0 left-0 select-none' draggable={false}/>
        </div>
    )
}

//ff8c00
function Navbar({curTheme, setThemeIndex, setCursorStyle}) {
  function ButtonStyle({route, element}) {
    return (<ScrollLink
            activeClass="active"
            to={route}
            spy={true}
            smooth={'easeInOutQuart'}
            duration={100}>
              <div onClick={() => {window.location.href = route;}} className={'cursor-pointer w-fit h-fit text-xl flex items-center bg-no-repeat hover:bg-contain'}
                style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                {element}
              </div>
            </ScrollLink>)
  }
  
  const projects = <strong>PROJECTS</strong>;
  const about = <strong>ABOUT</strong>;
  const contact = <strong>CONTACT</strong>;
  
  return (
    <nav className={`z-10 md:sticky top-0 ${curTheme.colors.text} md:mr-6 md:w-3/12 max-h-screen md:flex md:flex-col md:justify-between pt-20 md:pb-52 md:py-24`}>
      <div>
        <p>
          <strong className='text-5xl'>MARCUS CHEUNG</strong>
        </p>

        <div className={'md:mt-16 mb-2'}>
          <ButtonStyle route='#about' element={about}></ButtonStyle>
          <ButtonStyle route='#projects' element={projects}></ButtonStyle>
        </div>
      </div>
      
        
      <div className={'flex gap-4'}>
        <Social url='mailto: cheung.marcus@gmail.com' image={curTheme.assets.email}></Social>
        <Social url='https://www.linkedin.com/in/marcusjcheung/' image={curTheme.assets.linkedin}></Social>
        <Social url='https://github.com/marcus-cheung' image={curTheme.assets.github}></Social>
      </div>
       
    </nav>
  );
};

export default Navbar;
        