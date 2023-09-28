"use-client";

export type Colors = "default" | "purple" | "blue" | "red" | "fuchsia";

const colors: Record<Colors, string> = {
  default: "border-zinc-500 text-zinc-100",
  purple:
    "border-purple-900 text-purple-500 hover:text-purple-400 hover:border-purple-900",
  blue: "border-blue-900 text-blue-500 hover:text-blue-400 hover:border-blue-900",
  red: "border-red-900 text-red-500 hover:text-red-400 hover:border-red-900",
  fuchsia:
    "border-fuchsia-900 text-fuchsia-500 hover:text-fuchsia-400 hover:border-fuchsia-900"
};

type Props = {
  color?: Colors;
  href?: string;
  children: React.ReactNode;
};

export function Button({ children, color = "default", href }: Props) {
  const colorClass = colors[color];
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      className={`bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 px-40 py-4 rounded-lg flex gap-2 border ${colorClass}`}
    >
      {children}
    </Tag>
  );
}
