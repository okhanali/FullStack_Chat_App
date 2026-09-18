import type { Server, Socket } from "socket.io";

export interface ClientToServerEvents {
  join_room: (data: { username: string; room: string }) => void;
  send_message: (data: { room: string; message: string }) => void;
}

export interface ServerToClientEvents {
  receive_message: (data: {
    username: string;
    message: string;
    time: string;
  }) => void;
  user_joined: (data: { username: string; message: string }) => void;
  user_left: (data: { username: string; message: string }) => void;
}

export interface SocketData {
  username?: string;
  room?: string;
}

export type TServer = Server<
  ClientToServerEvents,
  ServerToClientEvents,
  Record<string, never>,
  SocketData
>;
export type TSocket = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  Record<string, never>,
  SocketData
>;
