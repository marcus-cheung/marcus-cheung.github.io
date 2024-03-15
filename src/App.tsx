import React, {useState} from 'react';
// import { HashRouter, Routes, Route } from 'react-router-dom';
import {Element} from 'react-scroll';
import {themes} from './Themes'
import {getCurrentTheme} from './Helpers';

import Navbar from './components/Navbar'
import Work from './pages/Work'
import About from './pages/About'
import LightBulb from './components/LightBulb';
import Mole from './components/Mole'

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];

  return (<div>
            <div className={`font-Cascadia lg:pl-44 md:pr-6 pl-4 min-h-screen flex justify-between min-w-fit w-full bg-repeat ${cursorStyle} ${curTheme.colors.text2}`} style={{backgroundImage: `url(${curTheme.textures.primary})`}}>
              <div className='w-[640x] justify-around md:flex'>
                <Navbar curTheme={curTheme}></Navbar>
                <div className='h-fit lg:ml-10'>
                  <Element id='about'>
                    <div className='h-24'></div>
                    <About curTheme={curTheme}/>
                  </Element>
                  <div className='h-12'></div>
                  <Element id='work'>
                    <div className='h-12'></div>
                    <Work curTheme={curTheme}/>
                  </Element>
                </div>
              </div>
              
              <LightBulb setThemeIndex={setThemeIndex} curTheme={curTheme} setCursorStyle={setCursorStyle}></LightBulb>
            </div>
            <div className='border-4 h-24'></div>
            
          </div>
    );
};
export default App;