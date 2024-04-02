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

const divider = <img className='select-none' src='assets/dividers/pixels.gif' draggable='false'></img>
const margin = <div className='relative h-10 md:left-[-12px] justify-center items-center flex my-8 w-full'>
  {divider}
</div>

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];

  return (<div className={`flex flex-col pr-4 md:items-center bg-repeat ${cursorStyle} ${curTheme.colors.text2}`} style={{backgroundImage: `url(${curTheme.textures.primary})`}}>
            <main className='font-mono pl-4 min-h-screen flex justify-between min-w-fit'>
              <div className='max-w-full md:w-[800px] justify-around md:flex gap-6'>
                <Navbar curTheme={curTheme}></Navbar>
                <div className='h-fit text-lg max-w-full md:w-[500px]'>
                  <Element id='about'>
                    <div className='relative h-10 md:h-24 md:left-[-12px] justify-center items-center flex my-8 md:my-0 w-full md:collapse'>
                      {divider}
                    </div>
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
                  <div></div>
                  {/* <a href='https://open.spotify.com/user/uokzhv84ckxmlhel7u9b4xga3?si=2f415cd8f55f4b6b' target="_blank">
                    <img className='absolute bottom-[-100px] right-16 w-24 shadow-[0_0px_25px_orange] rounded-full' src='assets/images/disk.gif'></img>
                  </a> */}
                </div>

              </div>
              <LightBulb setThemeIndex={setThemeIndex} curTheme={curTheme} setCursorStyle={setCursorStyle}></LightBulb>
            </main>
            <footer className='w-full h-32 bg'></footer>
            <Mole themeIndex={themeIndex}></Mole>

          </div>
    );
};
export default App;