import { cn } from "@/lib/utils";

type Variant = "preto" | "branco" | "link";

/** Ação ainda sem destino: nunca usa href falso, é anunciada como indisponível. */
export function EmBreve({
  label,
  variant = "preto",
  className,
  testId,
}: {
  label: string;
  variant?: Variant;
  className?: string;
  testId?: string;
}) {
  const base =
    variant === "preto"
      ? "pill-btn opacity-80"
      : variant === "branco"
        ? "pill-btn-branco opacity-90"
        : "inline-flex items-center opacity-70";
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className={cn(base, "gap-2 cursor-not-allowed hover:!translate-y-0 flex-wrap text-left", className)}
      data-testid={testId}
    >
      <span>{label}</span>
      <span className="font-sans text-[10px] font-semibold uppercase tracking-wider rounded-full border border-current px-2 py-0.5 whitespace-nowrap">
        Em breve
      </span>
    </button>
  );
}
