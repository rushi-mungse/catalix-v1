import { cn } from "../lib/utils";
import { IconProps } from "../types";

const LogoIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M1.88916 9.40741V28.963C1.88916 29.6807 2.32069 30.328 2.98318 30.604L19.6669 37.5556M1.88916 9.40741L18.2994 2.5698C19.1746 2.20513 20.1592 2.20513 21.0345 2.5698L28.5558 5.7037M1.88916 9.40741L10.778 13.1111M19.6669 16.8148V37.5556M19.6669 16.8148L37.4447 9.40741M19.6669 16.8148L10.778 13.1111M19.6669 37.5556L36.3507 30.604C37.0132 30.328 37.4447 29.6807 37.4447 28.963V9.40741M37.4447 9.40741L28.5558 5.7037M10.778 13.1111L28.5558 5.7037"
        stroke="#FEFEFE"
        strokeWidth="2.66667"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoIcon;
