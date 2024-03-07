export interface Theme {
  name: string;
  colors: {
    main: string;
    secondary: string;
    text: string;
  };
  assets: {
    bulb: string;
    bg_texture: string;
    secondary_texture: string;
  }
}

export const themes: Theme[] = [
  {
    name: "Light",
    colors: {
      main: "bg-stone-50",
      secondary: "bg-stone-100",
      text: "text-orange-500",
    },
    assets: {
      bulb: 'assets/images/bulb_on_orange.png',
      bg_texture: 'url(assets/images/textures/light_cloth_hoz.png)',
      secondary_texture: 'url(assets/images/textures/light_cloth_vert.png)'
    }
  },
  {
    name: "Dark",
    colors: {
      main: "bg-neutral-800",
      secondary: "bg-neutral-900",
      text: "text-white",
    },
    assets: {
      bulb: 'assets/images/bulb_off_white.png',
      bg_texture: 'url(assets/images/textures/dark_cloth_hoz.png)',
      secondary_texture: 'url(assets/images/textures/dark_cloth_vert.png)'
    }
  }
];