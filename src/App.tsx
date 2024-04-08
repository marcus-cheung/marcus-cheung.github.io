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
const margin = <div className='h-10 md:left-[-12px] justify-center items-center flex my-8 w-full'>
  <hr className="h-px my-8 bg-gray-200"></hr>
</div>


const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];

  return (<div className={`flex flex-col md:items-center ${curTheme.colors.bg} ${cursorStyle} ${cursorStyle} ${curTheme.colors.text2}`}>
            <main className='font-mono px-10 max-w-full min-h-screen flex justify-center min-w-fit'>
              <div className='md:flex relative justify-around'>
                <Navbar curTheme={curTheme}></Navbar>
                <div className='h-fit text-lg md:min-w-[460px] md:w-full md:max-w-[600px]'>
                  <Element id='about'>
                    <div className='h-10 md:h-24 md:left-[-12px] justify-center items-center flex my-8 md:my-0 w-full md:collapse'>
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
                  <a href='https://open.spotify.com/user/uokzhv84ckxmlhel7u9b4xga3?si=2f415cd8f55f4b6b' target="_blank">
                    <img className='absolute bottom-0 right-16 w-24 shadow-[0_0px_15px_orange] rounded-full' src='assets/images/disk.gif'></img>
                  </a>
                </div>

              </div>
              <LightBulb setThemeIndex={setThemeIndex} curTheme={curTheme} setCursorStyle={setCursorStyle}></LightBulb>
            </main>
            <footer className='w-full h-32 bg flex justify-center items-center text-xs'>@Marcus cheung</footer>
            {/* <Mole themeIndex={themeIndex}></Mole> */}

          </div>
    );
};
export default App;