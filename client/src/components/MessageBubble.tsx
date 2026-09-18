import type { FC } from "react";
import type { MessageData } from "../types";

interface Props {
  message: MessageData;
  currentUser: string;
}

const MessageBubble: FC<Props> = ({ message, currentUser }) => {
  const isMe = message.username === currentUser;
  const isSystem = message.username === "Sistem";

  if (isSystem) {
    return (
      <div className="flex justify-center my-2">
        <span className="rounded-full bg-slate-800/80 px-4 py-1 text-xs text-slate-400 border border-slate-700/50">
          {message.message}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
      <span className="mb-1 text-xs text-slate-400 px-1">
        {message.username}
      </span>
      <div
        className={`max-w-md rounded-2xl px-4 py-2.5 text-sm shadow-sm ${isMe ? "bg-indigo-600 text-white rounded-br-none" : "bg-slate-800 text-slate-100 border border-slate-700/60 rounded-bl-none"}`}
      >
        <p className="leading-relaxed">{message.message}</p>
        {message.time && (
          <span
            className={`block mt-1 text-[10px] text-right ${isMe ? "text-indigo-200" : "text-slate-400"}`}
          >
            {message.time}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
