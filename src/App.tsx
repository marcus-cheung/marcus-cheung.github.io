import React, {useState} from 'react';
import {themes} from './Themes'
import Mole from './components/Mole'
import PullThemeSwitch from './components/PullThemeSwitch';
import {getCurrentTheme} from './Helpers';

const App: React.FC = () => {

  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());

  return (
    <div className={`h-screen w-screen ${themes[themeIndex].colors.bg} ${themes[themeIndex].colors.text}`}>
        <Mole></Mole>
      <div>
        <h2>Marcus Cheung</h2>
        <div className={`flex flex-col justify-center items-center`}>
          <img src={`${themes[themeIndex].assets.bulb}`} style={{width: '40px', height: 'auto'}}/>
          <PullThemeSwitch setTheme={setThemeIndex}></PullThemeSwitch>
        </div>
        
      </div>
    </div>
    
      );
};
export default App;
