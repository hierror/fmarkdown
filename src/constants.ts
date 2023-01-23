type Properties = {
  symbol: string;
  isSpaced?: boolean;
  hasWrapper?: boolean;
  breakLine?: boolean;
};

type ElementProperties = {
  [key: string]: Properties;
};

export const Elements: ElementProperties = {
  markdown: {
    symbol: "",
  },
  text: {
    symbol: "",
  },
  p: {
    symbol: "",
    breakLine: true,
  },
  h1: {
    symbol: "#",
    isSpaced: true,
    hasWrapper: false,
  },
  h2: {
    symbol: "##",
    isSpaced: true,
    hasWrapper: false,
  },
  h3: {
    symbol: "###",
    isSpaced: true,
  },
  h4: {
    symbol: "####",
    isSpaced: true,
  },
  h5: {
    symbol: "#####",
    isSpaced: true,
  },
  h6: {
    symbol: "######",
    isSpaced: true,
  },
  bold: {
    symbol: "*",
    hasWrapper: true,
  },
  italic: {
    symbol: "_",
    hasWrapper: true,
  },
  blockquote: {
    symbol: ">",
    isSpaced: true,
  },
  code: {
    symbol: "`",
    hasWrapper: true,
  },
  strike: {
    symbol: "~~",
    hasWrapper: true,
  },
};
