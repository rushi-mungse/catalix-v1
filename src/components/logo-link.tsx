import { cn } from "../lib/utils";
import LogoIcon from "../icons/logo-icon";

interface LogoLinkProps {
  className?: string;
}

const LogoLink = ({ className }: LogoLinkProps) => {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <LogoIcon className="size-10" />
      <span className="text-4xl tracking-wider font-bold text-white">
        Catalix
      </span>
    </div>
  );
};

export default LogoLink;
