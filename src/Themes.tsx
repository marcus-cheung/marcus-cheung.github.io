export interface Theme {
  name: string;
  colors: {
    bg: string;
    text: string;
  };
}

export const themes: Theme[] = [
  {
    name: "Default",
    colors: {
      bg: "bg-blue-500",
      text: "text-gray-10",

    },
  },
  {
    name: "Dark",
    colors: {
      bg: "bg-black",
      text: "text-white",

    },
  },
  {
    name: "Dark",
    colors: {
      bg: "bg-yellow-50",
      text: "text-black",

    },
  },
];