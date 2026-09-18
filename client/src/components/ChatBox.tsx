import { useEffect, useRef, type FC } from "react";
import type { MessageData } from "../types";
import { Hash, Radio } from "lucide-react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

interface Props {
  username: string;
  room: string;
  messages: MessageData[];
  isConnected: boolean;
  onSendMessage: (room: string, message: string) => void;
}

const ChatBox: FC<Props> = ({
  username,
  room,
  messages,
  isConnected,
  onSendMessage,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen flex-col bg-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Hash className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">{room}</h2>
            <p className="text-xs text-slate-400">
              Giriş yapan: <span className="text-slate-200">{username}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium border border-slate-700">
          <Radio
            className={`h-3.5 w-3.5 ${isConnected ? "text-emerald-400 animate-pulse" : "text-rose-500"}`}
          />
          <span className={isConnected ? "text-emerald-400" : "text-rose-400"}>
            {isConnected ? "Canlı Bağlantı" : "Bağlantı Kesildi"}
          </span>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} currentUser={username} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <MessageInput onSend={(msg) => onSendMessage(room, msg)} />
    </div>
  );
};

export default ChatBox;
