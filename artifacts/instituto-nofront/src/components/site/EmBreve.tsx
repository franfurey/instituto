import { cn } from "@/lib/utils";

type Variant = "preto" | "branco" | "link";

/**
 * Ação ainda sem destino: nunca usa href falso, é anunciada como indisponível.
 * Pela revisão de design, as páginas escondem ações indisponíveis em vez de usar este botão.
 */
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
      className={cn(base, "cursor-not-allowed hover:!translate-y-0", className)}
      data-testid={testId}
    >
      {label}
    </button>
  );
}
