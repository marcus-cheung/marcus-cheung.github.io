import React, {useState} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import {themes} from './Themes'
import {getCurrentTheme} from './Helpers';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'


const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(getCurrentTheme());
  const [cursorStyle, setCursorStyle] = useState('cursor-auto');
  const curTheme = themes[themeIndex];

  return (
    <div className={`h-screen w-screen flex flex-col bg-repeat overflow-auto ${cursorStyle} ${curTheme.colors.text}`} style={{backgroundImage: `url(${curTheme.textures.primary})`}}>
      <Navbar curTheme={curTheme} setThemeIndex={setThemeIndex} setCursorStyle={setCursorStyle}></Navbar>
      <HashRouter> 
        <Routes>
          <Route path="/" element={<Home curTheme={curTheme}/>} />
          <Route path="/projects" element={<Projects curTheme={curTheme}/>} />
          <Route path="/about" element={<About curTheme={curTheme}/>} />
          <Route path="/contact" element={<Contact curTheme={curTheme}/>} />
        </Routes>
      </HashRouter>
    </div>
    );
};
export default App;