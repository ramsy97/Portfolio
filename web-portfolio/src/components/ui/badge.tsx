import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "primary" && "bg-primary/15 text-primary",
        variant === "secondary" && "bg-secondary/15 text-secondary dark:text-muted-foreground",
        variant === "outline" && "border border-border text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
