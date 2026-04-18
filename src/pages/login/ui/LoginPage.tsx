import { LoginForm } from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center bg-background">
      <div className="w-full max-w-sm p-6">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
