import React, {useState} from 'react';
// import { HashRouter, Routes, Route } from 'react-router-dom';
import {Element} from 'react-scroll';
import {themes} from './Themes'
import {getCurrentTheme} from './Helpers';

import Navbar from './components/Navbar'
import About from './pages/About'
import Work from './pages/Work'
import Projects from './pages/Projects'
import LightBulb from './components/LightBulb';
import Mole from './components/Mole'

const margin = <div className='h-24 mt-12'></div>

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];

  return (    
            <div className={`font-Cascadia lg:pl-44 md:pr-6 pl-6 min-h-screen flex justify-between min-w-fit w-full bg-repeat ${cursorStyle} ${curTheme.colors.text2}`} style={{backgroundImage: `url(${curTheme.textures.primary})`}}>
              <div className='w-[640x] justify-around md:flex'>
                <Navbar curTheme={curTheme}></Navbar>
                <div className='h-fit lg:ml-10 text-lg'>
                  <Element id='about'>
                    <div className='h-32 md:h-24'></div>
                    <About curTheme={curTheme}/>
                  </Element>
                  <Element id='work'>
                    {margin}
                    <Work curTheme={curTheme}/>
                  </Element>
                  <Element id='projects'>
                    {margin}
                    <Projects curTheme={curTheme}></Projects>
                  </Element>
                  <Element id='mole'>
                    {margin}
                    <Mole themeIndex={themeIndex}></Mole>
                  </Element>
                  <div className='h-52'></div>
                </div>
              </div>
              <LightBulb setThemeIndex={setThemeIndex} curTheme={curTheme} setCursorStyle={setCursorStyle}></LightBulb>
            </div>
    );
};
export default App;