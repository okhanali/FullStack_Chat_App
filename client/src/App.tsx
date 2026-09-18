import { useState, type FC } from "react";
import { useSocket } from "./hooks/useSocket";
import JoinRoom from "./components/JoinRoom";
import ChatBox from "./components/ChatBox";

const App: FC = () => {
  const { isConnected, messages, joinRoom, sendMessage } = useSocket();
  const [session, setSession] = useState<{
    username: string;
    room: string;
  } | null>(null);

  const handleJoin = (username: string, room: string) => {
    setSession({ username, room });
    joinRoom(username, room);
  };

  if (!session) {
    return <JoinRoom onJoin={handleJoin} />;
  }
  return (
    <ChatBox
      username={session.username}
      room={session.room}
      messages={messages}
      isConnected={isConnected}
      onSendMessage={sendMessage}
    />
  );
};

export default App;
