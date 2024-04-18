export interface Theme {
  name: string;
  colors: {
    text: string;
    textHighlight: string;
    hover: string;
    bg: string;
    highlight: string;
    border: string;
  };
  assets: {
    bulb: string;
    email: string;
    linkedin: string;
    github: string;
    frog: string;
    computer: string;
  };
  textures: {
    primary: string;
    secondary: string;
  }
}

export const themes: Theme[] = [
  {
    name: 'Light',
    colors: {
      text: 'text-slate-900',
      textHighlight:  'text-orange-500',
      hover: 'hover:bg-slate-800/5',
      bg: 'bg-[#f5eee9]',
      highlight: 'bg-orange-500',
      border: 'border-orange-500'
    },
    assets: {
      bulb: 'assets/light/icons/lightbulb.png',
      email: 'assets/light/icons/email.png',
      linkedin: 'assets/light/icons/linkedin.png',
      github: 'assets/light/icons/github.png',
      frog: 'assets/light/icons/frog.png',
      computer: 'assets/light/icons/computer.png'
    },
    textures: {
      primary: 'assets/light/textures/cloth_hoz.png',
      secondary: 'assets/light/textures/cloth_vert.png'
    }
  },
  {
    name: 'Dark',
    colors: {
      text: 'text-slate-50',
      textHighlight:  'text-orange-500',
      hover: 'hover:bg-white/5',
      bg: 'bg-stone-950',
      highlight: 'bg-orange-500',
      border: 'border-orange-500'
    },
    assets: {
      bulb: 'assets/dark/icons/lightbulb.png',
      email: 'assets/dark/icons/email.png',
      linkedin: 'assets/dark/icons/linkedin.png',
      github: 'assets/dark/icons/github.png',
      frog: 'assets/dark/icons/frog.png',
      computer: 'assets/dark/icons/computer.png'
    },
    textures: {
      primary: 'assets/dark/textures/cloth_hoz.png',
      secondary: 'assets/dark/textures/cloth_vert.png'
    }
  }
];