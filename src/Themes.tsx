export interface Theme {
  name: string;
  colors: {
    bg: string;
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
      bg: "bg-blue-500",
      text: "text-gray-10",
    },
    assets: {
      bulb: 'assets/images/bulb_on.png'
    }
  },
  {
    name: "Dark",
    colors: {
      bg: "bg-black",
      text: "text-white",
    },
    assets: {
      bulb: 'assets/images/bulb_off_2.png'
    }
  }
];