import { Link } from "react-router-dom";
import Logo from "../icons/PlanPoker";

function TheLogo() {
  return (
    <Link to="/" className="logo-name flex items-center gap-2.5">
      <div className="logo bg-sky-600 size-10 flex items-center justify-center rounded-md">
        <Logo className="fill-white size-6" />
      </div>

      <div className="text-sky-800 font-medium">PlanPoker</div>
    </Link>
  );
}

export default TheLogo;
