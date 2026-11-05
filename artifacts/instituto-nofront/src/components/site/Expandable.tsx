import { useId, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
    <div className="flex flex-col gap-4 txt-corpo">
      {intro}
      <div id={id} hidden={!open} className="flex flex-col gap-4">
        {rest}
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={cn("pill-btn-sm self-start mt-4", buttonClassName)}
        data-testid={testId}
      >
        {open ? lessLabel : moreLabel}
        {open ? <ChevronUp className="w-4 h-4" aria-hidden /> : <ChevronDown className="w-4 h-4" aria-hidden />}
      </button>
    </div>
  );
}
