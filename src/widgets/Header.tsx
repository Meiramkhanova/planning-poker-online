import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { useSessionStore } from "@/entities/session/model/store";
import { cn } from "@/shared/utils/cn";
import Container from "@/shared/ui/Container";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/shared/ui/Logo";
import { useShallow } from "zustand/react/shallow";

function Header() {
  const { isAuthenticated, user, logout } = useSessionStore(
    useShallow((state) => ({
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      logout: state.logout,
    })),
  );

  const navigate = useNavigate();

  const initialLetterName = user?.name.charAt(0) || "U";

  const handleSignOut = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <div className="header-outer-wrapper bg-white border-b border-gray-100 h-16 flex items-center">
        <Container>
          <div className="header-wrapper flex items-center justify-between">
            <Logo />

            <div className="auth-btns flex items-center gap-5">
              {!isAuthenticated ? (
                <>
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
                </>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    className="focus:outline-none border border-gray-200 uppercase">
                    <Button variant="secondary" className="min-w-12">
                      {initialLetterName}
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none">{user?.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/">Main</Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={handleSignOut}
                      className="text-red-500 focus:bg-red-50 focus:text-red-600 cursor-pointer">
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
