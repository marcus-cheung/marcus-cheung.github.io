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
              <div onClick={() => {window.location.href = route;}} className={'relative cursor-pointer w-fit h-12 text-2xl flex items-center bg-no-repeat hover:bg-contain hover:bg-center'}
                style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                {element}
              </div>
            </ScrollLink>)
  }
  
  const logo = <img src={curTheme.assets.frog} className='w-12 min-w-12 h-12 min-h-12 select-none' draggable={false}/>
  const name =  <p>
                  <strong className='text-4xl'>MARCUS</strong>
                  <br/>
                  Software Engineer
                </p>;
  const projects = <strong>PROJECTS</strong>;
  const about = <strong>ABOUT</strong>;
  const contact = <strong>CONTACT</strong>;
  
  return (
    <nav className={`z-10 sticky top-0 w-2/12 max-h-screen flex flex-col justify-evenly`}>
      <p className=''>
        <strong className='text-4xl'>MARCUS</strong>
        <br/>
        Software Engineer
      </p>

      <div>
        <ButtonStyle route='#about' element={about}></ButtonStyle>
        <ButtonStyle route='#projects' element={projects}></ButtonStyle>
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
        