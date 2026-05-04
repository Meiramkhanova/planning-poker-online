import Container from "@/shared/ui/Container";
import { LoginForm } from "./LoginForm";
import { Link } from "react-router-dom";
import PlanPoker from "@/shared/ui/PlanPoker";

const LoginPage = () => {
  return (
    <div className="wrapper h-full flex items-center py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
          <PlanPoker />

          <div className="flex flex-col gap-4">
            <div className="text-2xl text-gray-700 font-bold">Welcome Back</div>

            <div className="text-gray-500">Sign in to continue</div>

            <LoginForm />

            <div className="text-center text-gray-500 text-sm pt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-gray-700">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
