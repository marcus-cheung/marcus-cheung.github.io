export interface Theme {
  name: string;
  colors: {
    main: string;
    secondary: string;
    text: string;
  };
  assets: {
    bulb: string;
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
      bulb: 'assets/images/bulb_on_orange.png'
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
      bulb: 'assets/images/bulb_off_white.png'
    }
  }
];