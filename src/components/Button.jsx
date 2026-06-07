export default function Button({ content, handleClick, variant = "primary" }) {
  const variants = {
    primary:
      "bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] hover:from-[#c4b5fd] hover:to-[#a78bfa] text-[#0a0e27] font-semibold shadow-md hover:shadow-purple-500/40 transition-all",
    secondary:
      "bg-transparent border border-[#3730a3] hover:border-[#a78bfa] text-[#e0e7ff] hover:text-[#a78bfa]",
    ghost:
      "bg-transparent text-[#a5b4fc] hover:text-[#a78bfa] underline-offset-4 hover:underline",
    danger:
      "bg-red-700/80 hover:bg-red-600 text-white font-semibold",
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full cursor-pointer px-5 py-2.5 rounded-lg text-sm transition-all duration-200 active:scale-95 ${variants[variant]}`}
    >
      {content}
    </button>
  );
}