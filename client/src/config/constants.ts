export const SOCKET_EVENTS = {
  CLIENT: {
    JOIN_ROOM: "join_room",
    SEND_MESSAGE: "send_message",
  },
  SERVER: {
    RECEIVE_MESSAGE: "receive_message",
    USER_JOINED: "user_joined",
    USER_LEFT: "user_left",
  },
} as const;
