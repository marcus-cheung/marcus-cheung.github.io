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

  const space = <div className='pt-16'></div>


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

  

  return (<div className={`font-incon flex h-fit flex-col md:justify-center ${curTheme.colors.bg} ${cursorStyle} ${curTheme.colors.text}`}>            
            {/* Modal */}
            {/* <div ref={modalRef} className='w-full z-20 h-full bg-black fixed bg-opacity-40 flex justify-center items-center' style={{visibility: 'hidden'}}>
              <SecretCode closeModal={closeModal}></SecretCode>
            </div> */}
                {/* <Navbar curTheme={curTheme} activateMonty={()=>setMonty(true)}></Navbar> */}

            
            <main className='w-full min-h-screen md:flex'>
              {monty ? <Mole></Mole> : ''}
              <Navbar curTheme={curTheme} activateMonty={()=>setMonty(true)}></Navbar>
                {/* Main Body */}
                <div className='px-12 md:px-0 flex justify-center w-full'>
                  <div className='lg:w-[10%] md:w-8 w-0'/>
                  <div className="relative flex-1 flex flex-col justify-center items-center h-fit md:w-full md:max-w-[750px]">
                    {about}

                    <div className='flex flex-col md:w-full md:max-w-[600px]'>
                      {margin}
                      {work}
                      {margin}
                      {projects}
                    </div>
                    
                    <footer className={`w-full h-32 flex justify-center items-center text-xs`}>
                        Poilom and Fogum
                      <div className='h-0 fixed group duration-[5000ms] -bottom-[440px] hover:-translate-y-[380px] hover:-translate-x-12 lg:h-fit -right-24'>
                        <p className='text-lg ml-20 mb-2 opacity-0 h-0 group-hover:h-fit group-hover:opacity-100'>jiraf_lord</p>
                        <img src='assets/images/jiraf.png' className='h-0 lg:h-[500px]'></img>
                      </div>
                    </footer>
                  </div>
                  <div className='lg:w-[10%] md:w-8 w-0'/>

                </div>


              {/* Top Bar */}
              
            </main>

            
            {/* Floaters */}
            <div className='flex fixed gap-4 z-50 top-3 right-2 top-4 lg:top-8 lg:right-8 ${curTheme.colors.bg}'>
                {/* <img className='w-10 h-10 mt-2 cursor-pointer' src='assets/images/cart.png' onClick={()=>{modalRef.current.style.visibility = 'visible';}}></img> */}
                <LightBulb setThemeIndex={setThemeIndex} curTheme={curTheme} setCursorStyle={setCursorStyle}></LightBulb>
            </div>
          </div>
    );
};
export default App;