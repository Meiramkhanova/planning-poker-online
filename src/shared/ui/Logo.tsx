import { Link } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";

function Logo() {
  return (
    <Link to="/" className="logo-name flex items-center gap-2.5">
      <div className="logo bg-sky-600 size-8 flex items-center justify-center rounded-md">
        <LogoIcon className="fill-white size-5" />
      </div>

      <div className="text-sky-800 font-medium text-sm">PlanPoker</div>
    </Link>
  );
}

export default Logo;
