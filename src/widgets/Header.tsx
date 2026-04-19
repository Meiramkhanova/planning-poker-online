import { cn } from "@/lib/utils";
import Container from "@/shared/ui/Container";
import TheLogo from "@/shared/ui/Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-outer-wrapper bg-white border-b border-gray-100 h-16 flex items-center">
        <Container>
          <div className="header-wrapper flex items-center justify-between">
            <TheLogo />

            <div className="auth-btns flex items-center gap-5">
              <Link
                to="/login"
                className={cn(
                  "bg-sky-600 border border-sky-600 text-white px-4 py-2 rounded",
                  "hover:bg-sky-700 transition-colors duration-300",
                )}>
                Sign In
              </Link>

              <Link
                to="/register"
                className={cn(
                  "border-sky-600 border text-sky-600 bg-white px-4 py-2 rounded",
                  "hover:bg-sky-600 hover:text-white transition-colors duration-300",
                )}>
                Sign Up
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
