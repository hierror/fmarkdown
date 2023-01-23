///<reference types="../interfaces"/>

import { markdownBuilder } from "../dist/markdown";

const code = () =>
  markdown(() => {
    h1(() => {
      text("Hello ");
      bold("world");
    });
    p(() => {
      text("This is my first ");
      italic("paragraph");
      text(" using the FMarkdown DSL!");
    });
  });

console.log(markdownBuilder(code).toHtml());
