type Properties = {
  symbol: string;
  spaced?: boolean;
  wrapper?: boolean;
  break?: boolean;
  isolate?: boolean;
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
    break: true,
    isolate: true,
  },
  h1: {
    symbol: "#",
    spaced: true,
    break: true,
  },
  h2: {
    symbol: "##",
    spaced: true,
    break: true,
  },
  h3: {
    symbol: "###",
    spaced: true,
    break: true,
  },
  h4: {
    symbol: "####",
    spaced: true,
    break: true,
  },
  h5: {
    symbol: "#####",
    spaced: true,
    break: true,
  },
  h6: {
    symbol: "######",
    spaced: true,
    break: true,
  },
  bold: {
    symbol: "*",
    wrapper: true,
  },
  italic: {
    symbol: "_",
    wrapper: true,
  },
  blockquote: {
    symbol: ">",
    spaced: true,
    break: true,
    isolate: true,
  },
  code: {
    symbol: "`",
    wrapper: true,
  },
  strike: {
    symbol: "~~",
    wrapper: true,
  },
};
