import React, {useRef, useState} from 'react';
import {themes} from './Themes'
import Mole from './components/Mole'
import MoleFollower from './components/MoleFollower'
import {getCurrentTheme} from './Helpers';
import Navbar from './components/Navbar'

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [isHovered, setIsHovered] = useState(false);
  const curTheme = themes[themeIndex];

  const social = (url, image) => {
    return(<div className={'w-12 h-12 cursor-pointer hover:bg-contain'} style={{backgroundImage: `url(assets/images/icons/highlight_2.png)`}} onClick={() => {window.open(url, '_blank')!.focus()}}>
            <img src={image} className='w-12 h-12 object-cover top-0 left-0 select-none' draggable={false}/>
          </div>
      )
  }

  return (
    <div className={`h-screen w-screen bg-repeat ${curTheme.colors.text}`} style={{background: curTheme.textures.primary, cursor: isHovered ? 'pointer' : 'default' }}>
      <Navbar setThemeIndex={setThemeIndex} theme={curTheme} setIsHovered={setIsHovered}></Navbar>
      <div className='flex h-12'>
        {social('mailto: cheung.marcus@gmail.com', curTheme.assets.email)}
        {social('https://www.linkedin.com/in/marcusjcheung/', curTheme.assets.linkedin)}
        {social('https://github.com/marcus-cheung', curTheme.assets.github)}
      </div>
      <Mole themeIndex={themeIndex}></Mole>
    </div>
    );
};
export default App;