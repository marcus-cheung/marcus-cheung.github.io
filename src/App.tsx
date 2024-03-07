import React, {useState} from 'react';
import {themes} from './Themes'
import Mole from './components/Mole'
import {getCurrentTheme} from './Helpers';
import Navbar from './components/Navbar'

const App: React.FC = () => {

  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  console.log(themes[themeIndex])
  return (
    <div className={`h-screen w-screen ${themes[themeIndex].colors.main} ${themes[themeIndex].colors.text}`}>
      <Navbar setThemeIndex={setThemeIndex} theme={themes[themeIndex]}></Navbar>
      <Mole></Mole>
    </div>
      );
};
export default App;