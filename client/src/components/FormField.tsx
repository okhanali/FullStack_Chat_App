import type { LucideIcon } from "lucide-react";
import type { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
}

const FormField: FC<Props> = ({
  label,
  icon: Icon,
  className = "",
  ...inputProps
}) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          {...inputProps}
          className={`w-full rounded-xl bg-slate-900/50 border border-slate-700 py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all ${className}`}
        />
      </div>
    </div>
  );
};

export default FormField;
