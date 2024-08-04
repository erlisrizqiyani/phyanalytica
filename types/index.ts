import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: number;
};