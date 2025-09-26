export interface Theme {
  name: string;
  colors: {
    text: string;
    textHighlight: string;
    textHoverHighlight: string; // ✅ New property
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
    jiraf: string;
    pfp: string;
  };
}

export const themes: Theme[] = [
  {
    name: 'Light',
    colors: {
      text: 'text-slate-900',
      textHighlight: 'text-orange-500',
      textHoverHighlight: 'group-hover:text-orange-500', 
      bg: 'bg-[#f5eee9]',
      highlight: 'bg-orange-400',
      border: 'border-orange-400'
    },
    assets: {
      bulb: 'assets/light/icons/lightbulb.png',
      email: 'assets/light/icons/email.png',
      linkedin: 'assets/light/icons/linkedin.png',
      github: 'assets/light/icons/github.png',
      computer: 'assets/light/icons/computer.png',
      jiraf: 'assets/light/jiraf.png',
      pfp: 'assets/light/pfp_compressed.png'
    }
  },
  {
    name: 'Dark',
    colors: {
      text: 'text-stone-200',
      textHighlight: 'text-orange-400',
      textHoverHighlight: 'group-hover:text-orange-400',
      bg: 'bg-stone-950',
      highlight: 'bg-orange-400',
      border: 'border-orange-400'
    },
    assets: {
      bulb: 'assets/dark/icons/lightbulb.png',
      email: 'assets/dark/icons/email.png',
      linkedin: 'assets/dark/icons/linkedin.png',
      github: 'assets/dark/icons/github.png',
      computer: 'assets/dark/icons/computer.png',
      jiraf: 'assets/light/jiraf.png',
      pfp: 'assets/light/pfp_compressed.png'
    }
  }
];
