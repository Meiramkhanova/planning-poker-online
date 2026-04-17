import { LoginForm } from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="w-full max-w-sm p-6">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
