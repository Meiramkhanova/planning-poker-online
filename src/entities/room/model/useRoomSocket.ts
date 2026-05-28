import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

export const useRoomSocket = (roomId: string) => {
  const queryClient = useQueryClient();

  const socketRef = useRef<WebSocket | null>(null);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!roomId) return;

    const token = localStorage.getItem("accessToken");

    if (!token) {
      console.error("Token does not found.");
      return;
    }

    const host = "localhost:8000";
    const wsUrl = `ws://${host}/api/v1/ws/rooms/${roomId}?token=${token}`;

    const connect = () => {
      if (socketRef.current) {
        socketRef.current.close();
      }

      const socket = new WebSocket(wsUrl);
      socketRef.current = socket;

      socket.onopen = () => {
        console.log("Websocket succesfully connected to room:", roomId);
        if (reconnectTimerRef.current) {
          clearTimeout(reconnectTimerRef.current);
          reconnectTimerRef.current = null;
        }
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type) {
            queryClient.invalidateQueries({ queryKey: ["room", roomId] });
          }
        } catch (err) {
          console.error("Error with Json parsing", err);
        }
      };

      socket.onclose = (event) => {
        console.log("Session closed:", event.code);

        if (event.code !== 1000) {
          reconnectTimerRef.current = setTimeout(() => {
            console.log("Trying to reconnect in 3 seconds...");
            connect();
          }, 3000);
        }
      };

      socket.onerror = (error) => {
        console.error("Error WebSocket:", error);
        socket.close();
      };
    };

    connect();

    return () => {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }
      if (socketRef.current) {
        socketRef.current.close(1000);
      }
    };
  }, [roomId, queryClient]);
};
