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
        
      </div>
    </div>
    
      );
};
export default App;


{/* <nav className="bg-gray-200 flex justify-between items-center h-12 px-4 py-2 overflow-visible">
        <a href="#" className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">Your Brand Name</span>
        </a>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Socials</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Projects</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
          <li><div className={'bg-white h-64'}></div></li>
          <li>
            <div className={`flex flex-col justify-center items-center`}>
              <img src={`${themes[themeIndex].assets.bulb}`} style={{width: '25px', height: 'auto'}}/>
              <PullThemeSwitch setTheme={setThemeIndex}></PullThemeSwitch>
            </div>
          </li>
        </ul>
      </nav> */}