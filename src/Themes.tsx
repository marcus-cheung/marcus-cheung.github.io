export interface Theme {
  name: string;
  colors: {
    text: string;
    bg: string;
    highlight: string;
    border: string;
  };
  assets: {
    bulb: string;
    email: string;
    linkedin: string;
    github: string;
    computer: string;
  };

}

export const themes: Theme[] = [
  {
    name: 'Light',
    colors: {
      text: 'text-slate-900',
      bg: 'bg-[#f5eee9]',
      highlight: 'bg-orange-500',
      border: 'border-orange-500'
    },
    assets: {
      bulb: 'assets/light/icons/lightbulb.png',
      email: 'assets/light/icons/email.png',
      linkedin: 'assets/light/icons/linkedin.png',
      github: 'assets/light/icons/github.png',
      computer: 'assets/light/icons/computer.png'
    },

  },
  {
    name: 'Dark',
    colors: {
      text: 'text-stone-200',
      bg: 'bg-stone-950',
      highlight: 'bg-orange-500',
      border: 'border-orange-500'
    },
    assets: {
      bulb: 'assets/dark/icons/lightbulb.png',
      email: 'assets/dark/icons/email.png',
      linkedin: 'assets/dark/icons/linkedin.png',
      github: 'assets/dark/icons/github.png',
      computer: 'assets/dark/icons/computer.png'
    },

  }
];