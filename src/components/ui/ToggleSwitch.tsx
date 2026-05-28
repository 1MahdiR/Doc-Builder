interface ToggleSwitchProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  label?: string;
}

export default function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => onChange(!checked)}>
      <div className={`relative w-10 h-6 rounded-full transition-colors duration-200 ${checked ? 'bg-blue-500' : 'bg-zinc-600'}`}>
        <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
      </div>
      {label && <span className="text-sm text-zinc-300 select-none">{label}</span>}
    </div>
  );
}