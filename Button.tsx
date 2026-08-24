type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const base = "px-4 py-2 rounded-md font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
      : "bg-transparent border border-current hover:bg-black/5 dark:hover:bg-white/10";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
