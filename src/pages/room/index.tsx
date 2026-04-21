import Container from "@/shared/ui/Container";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams();

  return (
    <Container className="size-full">
      <div className="py-8 xl:py-12 flex flex-col gap-8 h-full">
        RoomPage : {roomId}
      </div>
    </Container>
  );
}

export default RoomPage;
