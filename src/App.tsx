import React, {useState} from 'react';
// import { HashRouter, Routes, Route } from 'react-router-dom';
import {Element} from 'react-scroll';
import {themes} from './Themes'
import {getCurrentTheme} from './Helpers';

import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import About from './pages/About'
import PullThemeSwitch from './components/PullThemeSwitch';
import Mole from './components/Mole'

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];
  return (<div>
            <div className={`md:pl-44 md:pr-6 pl-20 min-h-screen md:flex justify-between w-full bg-repeat ${cursorStyle} ${curTheme.colors.text2}`} style={{backgroundImage: `url(${curTheme.textures.primary})`}}>
              <div className='w-11/12 md:flex justify-around'>
                <Navbar curTheme={curTheme} setThemeIndex={setThemeIndex} setCursorStyle={setCursorStyle}></Navbar>
                <div className='border-4 w-10/12 h-fit md:ml-20'>
                  <Element id='about'>
                    <div className='h-24'></div>
                    <About curTheme={curTheme}/>
                  </Element>
                  <Element id='projects'>
                    <Projects curTheme={curTheme}/>
                  </Element>
                  <div className='h-20'>
                  </div>
                  <Mole themeIndex={themeIndex}></Mole>

                </div>
                
              </div>
              <div className='sticky top-0 pt-6 flex w-fit h-fit flex-col justify-center items-center'>
                <img src={curTheme.assets.bulb} style={{width: '42px', minWidth: '42px', height: 'auto', userSelect: 'none'}} draggable={false}/>
                <PullThemeSwitch setThemeIndex={setThemeIndex} setCursorStyle={setCursorStyle}></PullThemeSwitch>
              </div>
            </div>

            {/* <div className='w-full min-h-screen bg-black'>
              <Mole themeIndex={themeIndex}></Mole>
            </div> */}
          </div>
    );
};
export default App;