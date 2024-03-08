import React from 'react';
import PullThemeSwitch from './PullThemeSwitch';
import { Theme } from '../Themes';



const Navbar = ({setThemeIndex, theme}) => {
  const ButtonStyle = (link, comp) => {
    return (<div onClick={() => {window.location.href = link}} className={`bg-repeat cursor-pointer px-10 py-4 flex justify-center items-center`} style={{background: theme.textures.secondary}}>
      {comp}
      </div>)
  }

  const logo = <a><strong>Marcus</strong></a>;
  const about = <a><strong>About</strong></a>
  const contact = <a><strong>Contact</strong></a>
  const lightbulb = <div className={`bg-repeat px-2 py-2 h-full flex justify-center items-center`} style={{background: theme.textures.secondary}}> 
                      <img src={theme.assets.bulb} style={{width: '42px', minWidth: '42px', height: 'auto', userSelect: 'none'}}/>
                    </div>
  const pullstring = <div style={{position: 'absolute', right: '49px', top: '54px'}}>
                  <PullThemeSwitch setThemeIndex={setThemeIndex}></PullThemeSwitch>
                </div>
  
  return (
    <nav className={`bg-repeat w-full h-20 flex px-16 justify-between items-center`} style={{background: theme.textures.secondary}}>
         {ButtonStyle('#/', logo)}
      <ul className='flex gap-8 items-center'>
        <li>
          {ButtonStyle('#/about', about)}
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
