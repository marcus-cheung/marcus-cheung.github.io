// ThemeSwitcher.tsx
import React from "react";
import {Theme, themes} from '../Themes'


interface Props {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeSwitcher: React.FC<Props> = ({setTheme}) => {

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  return (<div>
    {themes.map((theme) => (
        <button onClick={() => handleThemeChange(theme)}>{theme.name}</button>
      ))}
  </div>);
};

export default ThemeSwitcher;
