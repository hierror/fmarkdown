import { Config } from "js-dsl";
import { Attributes, Primitive } from "./dist/markdown";

declare global {
  export function markdown(attr: Attributes, config?: Config): any;
  export function markdown(config?: Config): any;

  function text(attr: Attributes, value: Primitive, config?: Config): any;
  function text(attr: Attributes, config?: Config): any;
  function text(value?: Primitive, config?: Config): any;
  function text(config?: Config): any;

  function p(attr: Attributes, value: Primitive, config?: Config): any;
  function p(attr: Attributes, config?: Config): any;
  function p(value?: Primitive, config?: Config): any;
  function p(config?: Config): any;

  function h1(attr: Attributes, value: Primitive, config?: Config): any;
  function h1(attr: Attributes, config?: Config): any;
  function h1(value?: Primitive, config?: Config): any;
  function h1(config?: Config): any;

  function h2(attr: Attributes, value: Primitive, config?: Config): any;
  function h2(attr: Attributes, config?: Config): any;
  function h2(value?: Primitive, config?: Config): any;
  function h2(config?: Config): any;

  function h3(attr: Attributes, value: Primitive, config?: Config): any;
  function h3(attr: Attributes, config?: Config): any;
  function h3(value?: Primitive, config?: Config): any;
  function h3(config?: Config): any;

  function h4(attr: Attributes, value: Primitive, config?: Config): any;
  function h4(attr: Attributes, config?: Config): any;
  function h4(value?: Primitive, config?: Config): any;
  function h4(config?: Config): any;

  function h5(attr: Attributes, value: Primitive, config?: Config): any;
  function h5(attr: Attributes, config?: Config): any;
  function h5(value?: Primitive, config?: Config): any;
  function h5(config?: Config): any;

  function h6(attr: Attributes, value: Primitive, config?: Config): any;
  function h6(attr: Attributes, config?: Config): any;
  function h6(value?: Primitive, config?: Config): any;
  function h6(config?: Config): any;

  function bold(attr: Attributes, value: Primitive, config?: Config): any;
  function bold(attr: Attributes, config?: Config): any;
  function bold(value?: Primitive, config?: Config): any;
  function bold(config?: Config): any;

  function italic(attr: Attributes, value: Primitive, config?: Config): any;
  function italic(attr: Attributes, config?: Config): any;
  function italic(value?: Primitive, config?: Config): any;
  function italic(config?: Config): any;

  function blockquote(attr: Attributes, value: Primitive, config?: Config): any;
  function blockquote(attr: Attributes, config?: Config): any;
  function blockquote(value?: Primitive, config?: Config): any;
  function blockquote(config?: Config): any;

  function code(attr: Attributes, value: Primitive, config?: Config): any;
  function code(attr: Attributes, config?: Config): any;
  function code(value?: Primitive, config?: Config): any;
  function code(config?: Config): any;

  function strike(attr: Attributes, value: Primitive, config?: Config): any;
  function strike(attr: Attributes, config?: Config): any;
  function strike(value?: Primitive, config?: Config): any;
  function strike(config?: Config): any;
}
