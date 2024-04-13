import React, {useState} from 'react';
import {Element} from 'react-scroll';
import {themes} from './Themes'
import {getCurrentTheme} from './Helpers';

import Navbar from './components/Navbar'
import About from './pages/About'
import Work from './pages/Work'
import Projects from './pages/Projects'
import LightBulb from './components/LightBulb';
import FadeIn from './components/FadeIn';


const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];
  const divider = <hr className={`h-1 rounded-full bg-orange-500 w-7/12 border-0`}></hr>
  const margin = <div className='flex w-full justify-center'>
                    {divider}
                  </div>
  const space = <div className='pt-20'></div>
  return (<div className={`flex flex-col md:items-center ${curTheme.colors.bg} ${cursorStyle} ${cursorStyle} ${curTheme.colors.text2}`}>
            <main className='font-incon px-10 max-w-full min-h-screen flex justify-center min-w-fit'>
              <div className='md:flex relative justify-around'>
                <Navbar curTheme={curTheme}></Navbar>
                <div className='bg-repeat bg-[length:200px_200px] rounded-xl p-10 m-[-20px] relative h-fit md:min-w-[460px] md:w-full md:max-w-[600px]' style={{backgroundImage: 'url(assets/images/pap2er.jpeg)'}}>
                  <FadeIn>
                    <Element id='about'>
                          <About curTheme={curTheme}/>
                          {space}
                    </Element>
                  </FadeIn>
                  
                  {margin}
                    <Element id='work'>
                      {space}
                      <Work curTheme={curTheme}/>
                      {space}
                    </Element>

                  {margin}
                  
                  <Element id='projects'>
                    {space}   
                    <Projects curTheme={curTheme}></Projects>
                    {space}
                  </Element>

                  
                  {/* Floaters */}
                  {/* <a href='https://open.spotify.com/user/uokzhv84ckxmlhel7u9b4xga3?si=2f415cd8f55f4b6b' target="_blank">
                    <img className='absolute bottom-[-100px] right-[-24px] w-24 shadow-[0_0px_15px_orange] rounded-full' src='assets/images/disk.gif'></img>
                  </a> */}
                  {/* <img src='assets/images/police-bear.gif' className='absolute bottom-[900px] right-[90px]'></img> */}
                  <div className='h-72'></div>
                  
                </div>
              </div>
              <div className='flex fixed md:fixed pt-6 gap-4 right-0 ${curTheme.colors.bg}'>
                <img className='w-10 h-10 mt-2' src='assets/images/cart.png'></img>
                <LightBulb setThemeIndex={setThemeIndex} curTheme={curTheme} setCursorStyle={setCursorStyle}></LightBulb>
              </div>
            </main>
            <footer className={`w-full mt-32 h-32 flex justify-center items-center text-xs`}>Poilom and Fogum</footer>
            {/* <Mole themeIndex={themeIndex}></Mole> */}
          </div>
    );
};
export default App;