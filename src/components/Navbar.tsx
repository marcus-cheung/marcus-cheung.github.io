import React from 'react';
import PullThemeSwitch from './PullThemeSwitch';
import { Theme } from '../Themes';

const Navbar = ({setThemeIndex, theme}) => {

  
  return (
    <nav className={`bg-repeat w-full h-16 flex px-16 justify-between items-center`} style={{background: theme.assets.secondary_texture}}>
      <a href="#/" className=""><strong>Marcus Cheung</strong></a>
      <ul className='flex gap-8 items-center'>
        <li>
          <a href="#/about" className="nav-link"><strong>About</strong></a>
        </li>
        <li>
          <a href="#/contact" className="nav/a"><strong>Contact</strong></a>
        </li>
        <li>
          <img src={theme.assets.bulb} style={{width: '24px', minWidth: '24px', height: 'auto', userSelect: 'none'}}/>
          <div className='absolute top-8' style={{right: '33px'}}>
            <PullThemeSwitch setThemeIndex={setThemeIndex}></PullThemeSwitch>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
