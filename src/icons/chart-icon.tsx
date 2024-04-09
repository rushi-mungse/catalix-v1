import { cn } from "../lib/utils";
import { IconProps } from "../types";

const ChartIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <rect
        x="2.22217"
        y="1.88892"
        width="17.7778"
        height="17.7778"
        rx="4.44444"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
      />
      <path
        d="M7.63281 14.75L7.63281 12.1667"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2271 14.75L11.2271 6.13889"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8213 14.75L14.8213 8.72222"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChartIcon;
