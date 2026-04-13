import { useParams } from "react-router-dom";

function RoomPage() {
  const { id } = useParams();

  return <div>RoomPage : {id}</div>;
}

export default RoomPage;
