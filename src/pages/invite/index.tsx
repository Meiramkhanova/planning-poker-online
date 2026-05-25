import { useSessionStore } from "@/entities/session/model/store";
import { useJoinRoom } from "@/features/join-invitation/model/useJoinRoom";
import { Button } from "@/shared/ui/button";
import LoadingElement from "@/shared/ui/LoadingElement";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function InvitePage() {
  const { token } = useParams<{ token: string }>();

  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
  const isLoading = useSessionStore((state) => state.isLoading);

  const { mutate: joinRoom, error, status } = useJoinRoom();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      navigate(`/login?redirectTo=${encodeURIComponent(location.pathname)}`, {
        replace: true,
      });

      return;
    }

    if (token && status === "idle") {
      joinRoom(token);
    }
  }, [
    token,
    isAuthenticated,
    isLoading,
    joinRoom,
    navigate,
    location.pathname,
    status,
  ]);

  return (
    <div className="size-full flex items-center justify-center">
      {error ? (
        <div className="text-center flex flex-col gap-4">
          <p className="text-sky-800 font-medium">
            Invalid or expired invitation
          </p>

          <Button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </Button>
        </div>
      ) : (
        <>
          <LoadingElement className="size-fit" />
          <p className=" text-sky-800 font-medium">Joining a room...</p>
        </>
      )}
    </div>
  );
}

export default InvitePage;
