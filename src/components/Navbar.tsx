import React from 'react';
import PullThemeSwitch from './PullThemeSwitch';
import { Theme } from '../Themes';

const Navbar = ({setThemeIndex, theme}) => {

  
  return (
    <nav className={`${theme.colors.secondary} w-full h-16 flex px-16 justify-between items-center`}>
      <a href="#/" className="">Marcus Cheung</a>
      <ul className='flex gap-8 items-center'>
        <li>
          <a href="#/about" className="nav-link">About</a>
        </li>
        <li>
          <a href="#/contact" className="nav/a">Contact</a>
        </li>
        <li>
          <img src={theme.assets.bulb} style={{width: '24px', minWidth: '24px', height: 'auto', userSelect: 'none'}}/>
          <div className='absolute right-1'>
            <PullThemeSwitch setThemeIndex={setThemeIndex}></PullThemeSwitch>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
