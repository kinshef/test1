import { SVGProps, VFC } from 'react';

declare module '*.svg' {
  const SVG: VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}
