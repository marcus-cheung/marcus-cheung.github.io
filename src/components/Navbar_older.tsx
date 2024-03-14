import React, {useState, useEffect} from 'react';
import PullThemeSwitch from './PullThemeSwitch';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';

//ff8c00
function Navbar({curTheme, setThemeIndex, setCursorStyle}) {


  const curHashRoute = window.location.hash;
  const [hashRoute, setHashRoute] = useState(curHashRoute); // to force rerender
  const baseStyle = 'cursor-pointer text-center text-2xl flex h-12 justify-center items-center bg-no-repeat '
  const selectedStyle = baseStyle + 'bg-center bg-contain';
  const unselectedStyle = baseStyle + 'hover:bg-center hover:bg-contain';
  
  function ButtonStyle({route, element, curHashRoute}) {
    return (<ScrollLink
            activeClass="active"
            to={route}
            spy={true}
            smooth={'easeInOutQuart'}
            duration={800}>
              <div onClick={() => {window.location.href = route;}} className={route.slice(1) === curHashRoute.slice(1) ? selectedStyle : unselectedStyle}
                style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                {element}
              </div>
            </ScrollLink>)
  }
  
  const logo = <img src={curTheme.assets.frog} className='w-12 min-w-12 h-12 min-h-12 select-none' draggable={false}/>
  const projects = <a><strong>PROJECTS</strong></a>;
  const about = <a><strong>ABOUT</strong></a>;
  const contact = <a><strong>CONTACT</strong></a>;
  const lightbulb = <div className={`bg-repeat px-2 py-2 h-full flex justify-center items-center`}> 
                      <img src={curTheme.assets.bulb} style={{width: '42px', minWidth: '42px', height: 'auto', userSelect: 'none'}} draggable={false}/>
                    </div>
  const pullstring = <div className="absolute top-12"> 
                      <PullThemeSwitch setThemeIndex={setThemeIndex} setCursorStyle={setCursorStyle}></PullThemeSwitch>
                    </div>
  console.log("render")

  return (
    <nav className={`bg-repeat fixed w-full h-20 min-h-20 flex px-12 justify-between items-center`} style={{background: `url(${curTheme.textures.secondary})`}}>
      <div onClick={() => {setHashRoute("#"); window.location.href = "#";}} className={"" === curHashRoute.slice(1) ? selectedStyle : unselectedStyle} style={{backgroundImage: `url(assets/images/highlight.png)`}}>
        {logo}
        {/* Can't use button style, causes flashing on rerender for some reason */}
      </div>
      <ul className='flex gap-12 ml-6 items-center'>
        <li>
          <ButtonStyle route='#projects' element={projects} curHashRoute={curHashRoute}></ButtonStyle>
        </li>
        <li>
          <ButtonStyle route='#about' element={about} curHashRoute={curHashRoute}></ButtonStyle>
        </li>
        <li>
          <ButtonStyle route='#contact' element={contact} curHashRoute={curHashRoute}></ButtonStyle>
        </li>
        <li className='flex w-full h-full flex-col items-center'>
          {lightbulb}
          {pullstring}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
