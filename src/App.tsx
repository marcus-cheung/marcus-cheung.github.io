import React, {useState} from 'react';
// import { HashRouter, Routes, Route } from 'react-router-dom';
import {Element} from 'react-scroll';
import {themes} from './Themes'
import {getCurrentTheme} from './Helpers';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import PullThemeSwitch from './components/PullThemeSwitch';
import Mole from './components/Mole'

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];
  return (
    <div className={`px-12 min-h-screen w-full flex justify-evenly bg-repeat ${cursorStyle} ${curTheme.colors.text}`} style={{backgroundImage: `url(${curTheme.textures.primary})`, overflowAnchor: 'none'}}>
      <Navbar curTheme={curTheme} setThemeIndex={setThemeIndex} setCursorStyle={setCursorStyle}></Navbar>
      <div className={'border-4 w-6/12 h-fit'}>
        <Element id='about'>
          <About curTheme={curTheme}/>
        </Element>
        <Element id='projects'>
          <Projects curTheme={curTheme}/>
        </Element>
      </div>


      <div className='sticky py-12 top-0 flex w-fit h-fit flex-col justify-center items-center'>
        <img src={curTheme.assets.bulb} style={{width: '42px', minWidth: '42px', height: 'auto', userSelect: 'none'}} draggable={false}/>
        <PullThemeSwitch setThemeIndex={setThemeIndex} setCursorStyle={setCursorStyle}></PullThemeSwitch>
        <Mole themeIndex={themeIndex}></Mole>
      </div>

    </div>
    );
};
export default App;