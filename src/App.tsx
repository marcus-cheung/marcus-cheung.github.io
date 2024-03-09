import React, {useRef, useState} from 'react';
import {themes} from './Themes'
import Mole from './components/Mole'
import MoleFollower from './components/MoleFollower'
import {getCurrentTheme} from './Helpers';
import Navbar from './components/Navbar'

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('default');
  const curTheme = themes[themeIndex];

  const social = (url, image) => {
    return(<div className={'w-12 h-12 cursor-pointer bg-no-repeat hover:bg-contain hover:bg-center'} style={{backgroundImage: `url(assets/images/icons/highlight_2.png)`}} onClick={() => {window.open(url, '_blank')!.focus()}}>
            <img src={image} className='w-12 h-12 min-w-12 min-h-12 object-cover top-0 left-0 select-none' draggable={false}/>
          </div>
      )
  }

  return (
    <div className={`h-screen w-screen bg-repeat overflow-hidden ${curTheme.colors.text}`} style={{backgroundImage: curTheme.textures.primary, cursor: cursorStyle}}>      
      <Navbar setThemeIndex={setThemeIndex} theme={curTheme} setCursorStyle={setCursorStyle}></Navbar>
      <div className='flex w-full h-full flex-col justify-center items-center'>
        <p className='text-center text-8xl mb-2'><strong>Marcus Cheung</strong></p>
        <p className='text-center text-3xl mb-5'><strong>Software Engineer</strong></p>
        <div className='flex justify-between w-80 mb-8'>
          {social('mailto: cheung.marcus@gmail.com', curTheme.assets.email)}
          {social('https://www.linkedin.com/in/marcusjcheung/', curTheme.assets.linkedin)}
          {social('https://github.com/marcus-cheung', curTheme.assets.github)}
        </div>
      </div>
    </div>
    );
};
export default App;