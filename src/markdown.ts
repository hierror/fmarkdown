import { AbstractFactory, JsDsl } from "js-dsl";
import { Config } from "js-dsl/dist";
import { Elements } from "./constants";

export type Primitive = string | number | boolean | undefined;

export type Value = Primitive;

export type Attributes = {
  [k in string]: Primitive;
};

export type ElementOpts = {
  symbol: string;
  isSpaced: boolean;
  hasWrapper: boolean;
} & Attributes;

export class Element {
  symbol: string;

  isSpaced: boolean = false;

  hasWrapper: boolean = false;

  attributes: Attributes = {};

  value: Primitive | null;

  children: Array<Element> = [];

  isComment: boolean = false;

  constructor(opts: ElementOpts, attributes: Attributes, value: Value) {
    this.symbol = opts.symbol;
    this.isSpaced = opts.isSpaced;
    this.hasWrapper = opts.hasWrapper;

    if (typeof attributes != "object") {
      value = attributes;
    } else {
      this.attributes = attributes;
    }

    this.value = value;
  }

  addChild(child: Element) {
    this.children.push(child);
  }

  toHtml(prefix: string = "") {
    const res: Array<string> = [];

    if (this.symbol) {
      if (this.symbol !== "text") {
        res.push(this.symbol);
      }

      if (this.isSpaced) {
        res.push(" ");
      }

      if (this.value) {
        res.push(String(this.value));
      }
    }

    this.children.forEach((c) => {
      res.push(c.toHtml(prefix));
    });

    if (this.hasWrapper) {
      if (this.children.length && this.symbol !== "text") {
        res.push(prefix);
      }
      if (this.symbol !== "text") {
        res.push(this.symbol);
      }
    }

    return res.join("");
  }
}

export class ElementFactory extends AbstractFactory<Element, Element> {
  opts: Attributes;

  constructor(opts: Attributes = {}) {
    super();
    this.opts = opts;
  }

  newInstance(builder: JsDsl, name: string, attr: Attributes, value: Value) {
    const opts: ElementOpts = {
      symbol: this.opts.symbol as string,
      isSpaced: this.opts.isSpaced as boolean,
      hasWrapper: this.opts.hasWrapper as boolean,
    };

    return new Element(opts, attr, value);
  }

  setChild(builder: JsDsl, parent: Element, child: Element) {
    parent.addChild(child);
  }
}

export class BlockFactory extends ElementFactory {
  getBuilder(parent: JsDsl) {
    return new BlockBuilder(parent);
  }
}

export class BlockBuilder extends JsDsl {
  register() {
    const elements = Object.entries(Elements);

    elements.forEach(([name, element]) =>
      this.registerFactory(
        name,
        new ElementFactory({
          symbol: element.symbol,
          isSpaced: element.isSpaced,
          hasWrapper: element.hasWrapper,
        })
      )
    );
  }
}

export class MarkdownBuilder extends JsDsl {
  register() {
    this.registerFactory("markdown", new BlockFactory());
    this.registerFactory("text", new ElementFactory());
  }
}

export function markdownBuilder(f: Config): Element {
  return new MarkdownBuilder().build<Element>(f);
}
