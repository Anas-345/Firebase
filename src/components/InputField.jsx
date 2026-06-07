export default function InputField({
  type,
  content,
  placeholder,
  handleChange,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#a5b4fc]">
        {content}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, content)}
        className="
          h-10.5 w-full rounded-lg px-3.5 bg-[#0a0e27] border border-[#3730a3] text-sm text-[#e0e7ff] placeholder-[#4c1d95] outline-none transition-all duration-150 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#a78bfa]/20
        "
      />
    </div>
  );
}
