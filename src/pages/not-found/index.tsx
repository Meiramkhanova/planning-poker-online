import { Button } from "@/shared/ui/button";
import Container from "@/shared/ui/Container";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="not-found size-full">
      <div className="size-full flex items-center justify-center bg-linear-to-b from-sky-100/30 via-sky-20 to-white">
        <Container className="size-full">
          <div className="size-full flex items-center justify-center text-center">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-9xl md:text-[200px] text-sky-600/40 font-medium leading-none select-none">
                404
              </h1>

              <p className="text-2xl text-sky-900">
                Oops! I think we are lost.
              </p>

              <p className="text-lg text-gray-500">
                Let's get you back to somewhere familiar.
              </p>

              <Button onClick={() => navigate("/")} className="w-fit">
                <ArrowLeft />
                Back to home
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default NotFoundPage;
