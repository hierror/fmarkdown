///<reference types="../interfaces"/>

import { markdownBuilder } from "../dist/markdown";

const code = () =>
  markdown(() => {
    h1("Hello ", () => bold("world"));
  });

console.log(markdownBuilder(code).toHtml());
