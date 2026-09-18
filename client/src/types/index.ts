export interface MessageData {
  username: string;
  message: string;
  time?: string;
}

export interface ClientToServerEvents {
  join_room: (data: { username: string; room: string }) => void;
  send_message: (data: { room: string; message: string }) => void;
}
export interface ServerToClientEvents {
  receive_message: (data: MessageData) => void;
  user_joined: (data: MessageData) => void;
  user_left: (data: MessageData) => void;
}
