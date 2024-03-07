import React, {useState} from 'react';
import {themes} from './Themes'
import Mole from './components/Mole'
import MoleFollower from './components/MoleFollower'
import {getCurrentTheme} from './Helpers';
import Navbar from './components/Navbar'

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  return (
    <div className={`h-screen w-screen bg-repeat ${themes[themeIndex].colors.text}`} style={{background: themes[themeIndex].assets.bg_texture}}>
      <Navbar setThemeIndex={setThemeIndex} theme={themes[themeIndex]}></Navbar>
      <Mole themeIndex={themeIndex}></Mole>
    </div>
      );
};
export default App;