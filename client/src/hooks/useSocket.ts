import { useCallback, useEffect, useState } from "react";
import { socket } from "../services/socket";
import type { MessageData } from "../types";
import { SOCKET_EVENTS } from "../config/constants";

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageReceived(data: MessageData) {
      setMessages((prev) => [...prev, data]);
    }

    //* Listenerları Dinle
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on(SOCKET_EVENTS.SERVER.RECEIVE_MESSAGE, onMessageReceived);
    socket.on(SOCKET_EVENTS.SERVER.USER_JOINED, onMessageReceived);
    socket.on(SOCKET_EVENTS.SERVER.USER_LEFT, onMessageReceived);

    //* Listenerları Temizle
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off(SOCKET_EVENTS.SERVER.RECEIVE_MESSAGE, onMessageReceived);
      socket.off(SOCKET_EVENTS.SERVER.USER_JOINED, onMessageReceived);
      socket.off(SOCKET_EVENTS.SERVER.USER_LEFT, onMessageReceived);
    };
  }, []);

  //* Odaya Katılım
  const joinRoom = useCallback((username: string, room: string) => {
    if (!socket.connected) {
      socket.connect();
    }
    socket.emit(SOCKET_EVENTS.CLIENT.JOIN_ROOM, { username, room });
  }, []);

  //* Mesaj Gönderme
  const sendMessage = useCallback((room: string, message: string) => {
    if (message.trim()) {
      socket.emit(SOCKET_EVENTS.CLIENT.SEND_MESSAGE, { room, message });
    }
  }, []);

  return {
    isConnected,
    messages,
    joinRoom,
    sendMessage,
  };
};
