import React, {useEffect, useState} from 'react';
import {themes} from './Themes'
import Mole from './components/Mole'
import MoleFollower from './components/MoleFollower'
import {getCurrentTheme} from './Helpers';
import Navbar from './components/Navbar'

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const curTheme = themes[themeIndex];

  const social = (url, background) => {
    return(<div className={'w-12 h-12 cursor-pointer'} onClick={() => {window.open(url, '_blank')!.focus()}} 
            style={{backgroundImage: `url(${background})`, backgroundSize: 'contain'}}>
          </div>)
  }

  return (
    <div className={`h-screen w-screen bg-repeat ${curTheme.colors.text}`} style={{background: curTheme.textures.primary}}>
      <Navbar setThemeIndex={setThemeIndex} theme={curTheme}></Navbar>
      {social('mailto: cheung.marcus@gmail.com', curTheme.assets.email)}
      {social('https://www.linkedin.com/in/marcusjcheung/', curTheme.assets.linkedin)}
      {social('https://github.com/marcus-cheung', curTheme.assets.github)}
      <Mole themeIndex={themeIndex}></Mole>
    </div>
    );
};
export default App;