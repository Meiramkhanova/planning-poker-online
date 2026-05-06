import { RegisterForm } from "@/features/auth";
import Container from "@/shared/ui/Container";
import PlanPoker from "@/shared/ui/PlanPoker";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="wrapper h-full flex items-center py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
          <PlanPoker />

          <div className="flex flex-col gap-4">
            <div className="text-2xl text-gray-700 font-bold">
              Create Account
            </div>

            <div className="text-gray-500">Sign up to get started</div>

            <RegisterForm />

            <div className="text-center text-gray-500 text-sm pt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-gray-700">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
