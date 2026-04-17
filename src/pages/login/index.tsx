import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function LoginPage() {
  return (
    <div className="dark bg-background h-screen text-foreground flex items-center justify-center">
      <div className="flex flex-col gap-16 max-w-sm w-full">
        <div className="logo-wrapper font-black text-lg flex justify-center items-center gap-4">
          <div className="h-12 w-8 flex items-center justify-center rounded-sm bg-foreground text-background">
            ?
          </div>
          <span>Planning Poker</span>
        </div>

        <div className="login-wrapper flex flex-col gap-8">
          <div className="sign-in-text flex flex-col gap-2 text-center">
            <div className="text-xl font-bold">Sign In</div>

            <div className="text-sm text-gray-300">
              Enter your credentials to continue
            </div>
          </div>

          <form className="flex flex-col gap-8">
            <Field>
              <FieldLabel htmlFor="input-field-username">Email</FieldLabel>
              <Input
                id="input-field-username"
                type="text"
                placeholder="Enter your username"
                className="py-5 rounded"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="input-field-username">Password</FieldLabel>
              <Input
                id="input-field-username"
                type="text"
                placeholder="Enter your username"
                className="py-5 rounded"
              />
            </Field>

            <Button type="reset" variant="default" className="py-5 rounded">
              Reset
            </Button>
          </form>

          <div className="text-center">Don't have an account? Sign up</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
