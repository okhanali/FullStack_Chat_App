import { Send } from "lucide-react";
import { useState, type FC, type FormEvent } from "react";

interface Props {
  onSend: (message: string) => void;
}

const MessageInput: FC<Props> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-slate-800 bg-slate-900 p-4"
    >
      <div className="flex items-center gap-3 max-w-5xl mx-auto">
        <input
          type="text"
          placeholder="Bir mesaj yazın..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 rounded-xl bg-slate-800 border border-slate-700/80 py-3 px-4 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-all duration-300 cursor-pointer shrink-0"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
