import { cn } from "../lib/utils";
import { IconProps } from "../types";

const LogoutIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M14.2222 14.6666V16.4444C14.2222 18.4081 12.6303 19.9999 10.6666 19.9999H6.22217C4.25849 19.9999 2.66661 18.4081 2.66661 16.4444V5.77772C2.66661 3.81404 4.25849 2.22217 6.22217 2.22217H10.6666C12.6303 2.22217 14.2222 3.81405 14.2222 5.77772V7.5555"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        d="M16.889 13.7778L18.9271 11.7397C19.2743 11.3926 19.2743 10.8298 18.9271 10.4826L16.889 8.4445"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        d="M18.6667 11.1111L8 11.1111"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LogoutIcon;
