import { cn } from "../lib/utils";
import { IconProps } from "../types";

const TimerIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <circle
        cx="11.1113"
        cy="12.5557"
        r="8"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
      />
      <path
        d="M9.3335 1.88892H12.8891"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        d="M11.1113 1.88892L11.1113 4.55558"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        d="M11.1113 12.5556L13.778 9.88892"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        d="M16.8892 6.33336L17.3336 5.88892"
        stroke="#FEFEFE"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TimerIcon;
