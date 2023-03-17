import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M13.736 21.848a10.002 10.002 0 0 0 6.698-15.221 10 10 0 1 0-6.698 15.221Z"
      stroke="#33363F"
      strokeWidth={2}
    />
    <path
      d="M12 12v6M12 7V6"
      stroke="#33363F"
      strokeWidth={2}
      strokeLinecap="square"
    />
  </svg>
);
export default SvgInfo;
