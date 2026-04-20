import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSessionStore } from "@/entities/session/model/store";
import { cn } from "@/lib/utils";
import Container from "@/shared/ui/Container";
import TheLogo from "@/shared/ui/Logo";
import { Link } from "react-router-dom";

function Header() {
  const { isAuthenticated, user, logout } = useSessionStore();

  const initialLetterName = user?.name.charAt(0) || "U";

  return (
    <header>
      <div className="header-outer-wrapper bg-white border-b border-gray-100 h-16 flex items-center">
        <Container>
          <div className="header-wrapper flex items-center justify-between">
            <TheLogo />

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
                    <Button className="bg-transparent text-gray-700 py-5 flex items-center min-w-12">
                      {/* <div
                        style={{
                          backgroundColor: user?.avatar_color || "#e5e7eb",
                        }}
                        className={cn(
                          "circle-name size-8 border border-gray-100 rounded-full",
                          "flex items-center justify-center uppercase",
                        )}>
                        {initialLetterName}
                      </div> */}
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
                      <Link to="/dashboard">Profile</Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={logout}
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
