import React from 'react';
import PullThemeSwitch from './PullThemeSwitch';
import { Theme } from '../Themes';


//ff8c00
const Navbar = ({setThemeIndex, theme, setCursorStyle}) => {
  const ButtonStyle = (link, comp) => {
    return (<div onClick={() => {window.location.href = link}}
    className={`cursor-pointer text-center text-2xl px-4 py-4 flex justify-center items-center bg-no-repeat hover:bg-center hover:bg-contain`} style={{backgroundImage: `url(assets/images/icons/highlight_2.png)`}}>
      {comp}
      </div>)
  }

  const logo = <a><strong>MARCUS</strong></a>;
  const projects = <a><strong>PROJECTS</strong></a>;
  const about = <a><strong>ABOUT</strong></a>;
  const contact = <a><strong>CONTACT</strong></a>;
  const lightbulb = <div className={`bg-repeat px-2 py-2 h-full flex justify-center items-center`}> 
                      <img src={theme.assets.bulb} style={{width: '42px', minWidth: '42px', height: 'auto', userSelect: 'none'}}/>
                    </div>
  const pullstring = <div style={{position: 'absolute', right: '49px', top: '54px'}}>
                  <PullThemeSwitch setThemeIndex={setThemeIndex} setCursorStyle={setCursorStyle}></PullThemeSwitch>
                </div>
  
  return (
    <nav className={`absolute bg-repeat w-full h-20 flex px-16 justify-between items-center`} style={{background: theme.textures.secondary}}>
         {ButtonStyle('#/', logo)}
      <ul className='flex gap-6 items-center'>
        <li>
          {ButtonStyle('#/about', about)}
        </li>
        <li>
          {ButtonStyle('#/projects', projects)}
        </li>
        <li>
          {ButtonStyle('#/contact', contact)}
        </li>
        <li>
          {lightbulb}
          {pullstring}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
