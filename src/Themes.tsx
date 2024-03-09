export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    text: string;
  };
  assets: {
    bulb: string;
    email: string;
    linkedin: string;
    github: string;
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
      primary: "bg-stone-50",
      secondary: "bg-stone-100",
      text: "text-black",
    },
    assets: {
      bulb: 'assets/images/icons/lightbulb_on_3.png',
      email: 'assets/images/icons/email.png',
      linkedin: 'assets/images/icons/linkedin.png',
      github: 'assets/images/icons/github.png',
    },
    textures: {
      primary: 'url(assets/images/textures/light_cloth_hoz.png)',
      secondary: 'url(assets/images/textures/light_cloth_vert.png)'
    }
  },
  {
    name: "Dark",
    colors: {
      primary: "bg-neutral-800",
      secondary: "bg-neutral-900",
      text: "text-white",
    },
    assets: {
      bulb: 'assets/images/icons/lightbulb_off.png',
      email: 'assets/images/icons/email_light.png',
      linkedin: 'assets/images/icons/linkedin_light.png',
      github: 'assets/images/icons/github_light.png',
    },
    textures: {
      primary: 'url(assets/images/textures/dark_cloth_hoz.png)',
      secondary: 'url(assets/images/textures/dark_cloth_vert.png)'
    }
  }
];