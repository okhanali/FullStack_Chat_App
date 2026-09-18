import { Hash, LogIn, User } from "lucide-react";
import { useState, type FC, type FormEvent } from "react";
import FormField from "./FormField";

interface Props {
  onJoin: (username: string, room: string) => void;
}

const JoinRoom: FC<Props> = ({ onJoin }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim() && room.trim()) {
      onJoin(username.trim(), room.trim());
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Sohbet Odası
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Katılmak için kullanıcı adı ve oda kodu girin
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <FormField
            label="Kullanıcı Adı"
            icon={User}
            type="text"
            required
            placeholder="Örn: ahmet123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormField
            label="Oda Kodu"
            icon={Hash}
            type="text"
            required
            placeholder="Örn: yazilim-oda-1"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white hover:bg-indigo-500 active:scale-[0.98] transition-all cursor-po shadow-lg shadow-indigo-600/30"
          >
            <LogIn className="h-5 w-5" />
            Odaya Katıl
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinRoom;
