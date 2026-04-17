import { RegisterForm } from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="w-full max-w-sm p-6">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>

        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
