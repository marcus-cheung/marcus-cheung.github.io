import React, {useState, useRef} from 'react';
import {Element} from 'react-scroll';
import {themes} from './Themes';
import {getCurrentTheme} from './Helpers';

import Navbar from './components/Navbar';
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';

import LightBulb from './components/LightBulb';
import FadeIn from './components/FadeIn';
import SecretCode from './components/SecretCode';
import Mole from './components/Mole';



const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];
  const [monty, setMonty] = useState(false);

  const modalRef = useRef<any>(null);
  function closeModal() {
    modalRef.current.style.visibility = 'hidden';
  }

  const margin = <FadeIn>
                    <div className='flex w-full justify-center'>
                      <hr className={`h-1 rounded-full ${curTheme.colors.highlight} w-7/12 border-0`}></hr>
                    </div>
                  </FadeIn>

  const space = <div className='pt-20'></div>


  const about = <Element id=''>
                  <FadeIn>
                  <About curTheme={curTheme}/>
                  {space}
                  </FadeIn>
                </Element>

  const work = <Element id='work'>
                  {space}
                  <Work curTheme={curTheme}/>
                  {space}
                </Element>

  const projects = <Element id='projects'>
                    {space}   
                    <Projects curTheme={curTheme}></Projects>
                    {space}
                  </Element>

  return (<div className={`font-incon flex h-fit flex-col md:items-center ${curTheme.colors.bg} ${cursorStyle} ${curTheme.colors.text}`}>            
            {/* Modal */}
            <div ref={modalRef} className='w-full z-20 h-full bg-black fixed bg-opacity-40 flex justify-center items-center' style={{visibility: 'hidden'}}>
              <SecretCode closeModal={closeModal}></SecretCode>
            </div>
            
            <main className='px-10 max-w-full h-fit min-h-screen flex justify-center min-w-fit'>
              {monty ? <Mole></Mole> : ''}
              <div className='md:flex relative justify-around'>
                <Navbar curTheme={curTheme} activateMonty={()=>setMonty(true)}></Navbar>
                {/* Main Body */}
                <div className='p-10 m-[-20px] relative h-fit md:min-w-[460px] md:w-full md:max-w-[600px]'>
                  {about}
                  
                  {margin}

                  {work}

                  {margin}
                  
                  {projects}
                  
                </div>
              </div>
              {/* Top Bar */}
              <div className='flex fixed md:fixed pt-6 gap-4 z-50 right-0 ${curTheme.colors.bg}'>
                {/* <img className='w-10 h-10 mt-2 cursor-pointer' src='assets/images/cart.png' onClick={()=>{modalRef.current.style.visibility = 'visible';}}></img> */}
                <LightBulb setThemeIndex={setThemeIndex} curTheme={curTheme} setCursorStyle={setCursorStyle}></LightBulb>
              </div>
            </main>

            <footer className={`w-full mt-32 h-32 flex justify-center items-center text-xs`}>
              Poilom and Fogum
              <div className='h-0 fixed group duration-[5000ms] -bottom-[930px] hover:-translate-y-[800px] hover:-translate-x-12 lg:h-fit -right-32'>
                <p className='text-lg ml-24 mb-2 opacity-0 h-0 group-hover:h-fit group-hover:opacity-100'>jiraf_lord</p>
                <img src='assets/images/jiraf_long.png' className='h-0 lg:h-[1000px]'></img>
              </div>
            </footer>
            {/* Floaters */}
            
          </div>
    );
};
export default App;