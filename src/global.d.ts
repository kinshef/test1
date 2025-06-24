declare module "*.svg?url" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  export const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

declare module "*.css" {
  const content: string;
  export default content;
}
