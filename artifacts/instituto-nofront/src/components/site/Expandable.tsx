import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Mostra `intro` sempre e `rest` sob demanda (conteúdo integral permanece no DOM). */
export function Expandable({
  intro,
  rest,
  buttonClassName,
  testId,
  moreLabel = "Leia mais",
  lessLabel = "Mostrar menos",
}: {
  intro: ReactNode;
  rest: ReactNode;
  buttonClassName?: string;
  testId?: string;
  moreLabel?: string;
  lessLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="flex flex-col gap-4">
      {intro}
      <div id={id} hidden={!open} className="flex flex-col gap-4">
        {rest}
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={cn("pill-btn-sm gap-2 self-start", buttonClassName)}
        data-testid={testId}
      >
        {open ? lessLabel : moreLabel}
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
    </div>
  );
}
