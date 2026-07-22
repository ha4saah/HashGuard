interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-indigo-500/30
      bg-indigo-500/10
      px-4
      py-2
      text-sm
      font-medium
      text-indigo-300
      backdrop-blur-xl
      "
    >
      {children}
    </div>
  );
}