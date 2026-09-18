import { TServer, TSocket } from "../types/index.js";
import { SOCKET_EVENTS } from "../utils/constants.js";

export const registerSocketHandlers = (io: TServer, socket: TSocket) => {
  //* Odaya Katılım
  const handleJoinRoom = ({
    username,
    room,
  }: {
    username: string;
    room: string;
  }) => {
    socket.data.username = username;
    socket.data.room = room;

    socket.join(room);

    socket.to(room).emit(SOCKET_EVENTS.SERVER.USER_JOINED, {
      username: "Sistem",
      message: `${username} odaya katıldı`,
    });
  };

  //* Mesaj Gönderme
  const handleSendMessage = ({
    room,
    message,
  }: {
    room: string;
    message: string;
  }) => {
    const username = socket.data.username || "Anonim";
    const time = new Date().toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    io.in(room).emit(SOCKET_EVENTS.SERVER.RECEIVE_MESSAGE, {
      username,
      message,
      time,
    });
  };

  //* Bağlantı Kopması
  const handleDisconnect = () => {
    const { username, room } = socket.data;

    if (username && room) {
      socket.to(room).emit(SOCKET_EVENTS.SERVER.USER_LEFT, {
        username: "Sistem",
        message: `${username} odadan ayrıldı`,
      });
    }
  };

  socket.on(SOCKET_EVENTS.CLIENT.JOIN_ROOM, handleJoinRoom);
  socket.on(SOCKET_EVENTS.CLIENT.SEND_MESSAGE, handleSendMessage);
  socket.on("disconnect", handleDisconnect);
};
