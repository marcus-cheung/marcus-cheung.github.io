export interface Theme {
  name: string;
  colors: {
    text: string;
  };
  assets: {
    bulb: string;
    email: string;
    linkedin: string;
    github: string;
    frog: string;
  };
  textures: {
    primary: string;
    secondary: string;
  }
}

export const themes: Theme[] = [
  {
    name: "Light",
    colors: {
      text: "text-black",
    },
    assets: {
      bulb: 'assets/light/icons/lightbulb.png',
      email: 'assets/light/icons/email.png',
      linkedin: 'assets/light/icons/linkedin.png',
      github: 'assets/light/icons/github.png',
      frog: 'assets/light/icons/frog.png'
    },
    textures: {
      primary: 'assets/light/textures/cloth_hoz.png',
      secondary: 'assets/light/textures/cloth_vert.png'
    }
  },
  {
    name: "Dark",
    colors: {
      text: "text-white",
    },
    assets: {
      bulb: 'assets/dark/icons/lightbulb.png',
      email: 'assets/dark/icons/email.png',
      linkedin: 'assets/dark/icons/linkedin.png',
      github: 'assets/dark/icons/github.png',
      frog: 'assets/dark/icons/frog.png'
    },
    textures: {
      primary: 'assets/dark/textures/cloth_hoz.png',
      secondary: 'assets/dark/textures/cloth_vert.png'
    }
  }
];