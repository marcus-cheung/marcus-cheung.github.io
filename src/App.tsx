import React, {useEffect, useState} from 'react';
import {themes} from './Themes'
import Mole from './components/Mole'
import PullThemeSwitch from './components/PullThemeSwitch';
import {getCurrentTheme} from './Helpers';

const App: React.FC = () => {

  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());

  return (
    <div className={`h-screen w-screen ${themes[themeIndex].colors.bg} ${themes[themeIndex].colors.text}`}>
        <Mole></Mole>
      <div className={`flex flex-col justify-center items-center`}>
        <h2>Marcus Cheung</h2>
        <PullThemeSwitch setTheme={setThemeIndex}></PullThemeSwitch>
      </div>
    </div>
    
      );
};
export default App;
