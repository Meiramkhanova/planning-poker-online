import { useSessionStore } from "@/entities/session/model/store";
import { useJoinRoom } from "@/features/join-invitation/model/useJoinRoom";
import { Button } from "@/shared/ui/button";
import LoadingElement from "@/shared/ui/LoadingElement";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function InvitePage() {
  const { token } = useParams<{ token: string }>();

  const navigate = useNavigate();

  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
  const isLoading = useSessionStore((state) => state.isLoading);

  const { mutate: joinRoom, isPending, error } = useJoinRoom();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (token && !isPending && !error) {
      joinRoom(token, {
        onSuccess: (data) => {
          navigate(`/dashboard/room/${data.room.id}`, { replace: true });
        },
      });
    }
  }, [token, isAuthenticated, isLoading, joinRoom, navigate, isPending, error]);

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
