import type { SVGProps } from "react";
import symbolSvg from "@/assets/simbolo-nofront.svg?raw";

type SimboloNoFrontProps = Omit<SVGProps<SVGSVGElement>, "color" | "viewBox"> & {
  cor?: string;
  contorno?: boolean;
  espessura?: number;
  viewBox?: string;
};

const PATH = symbolSvg.match(/<path\b[^>]*\bd="([^"]+)"/)?.[1];
if (!PATH) throw new Error("O SVG oficial do Instituto NoFront não contém um caminho válido.");

export function SimboloNoFront({
  className,
  cor,
  contorno = false,
  espessura = 1,
  viewBox = "0 0 698 964",
  preserveAspectRatio = "xMidYMid meet",
  ...props
}: SimboloNoFrontProps) {
  return (
    <svg
      {...props}
      className={className}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden={props["aria-label"] ? undefined : true}
      style={{ color: cor, ...props.style }}
    >
      <path
        d={PATH}
        fill={contorno ? "none" : "currentColor"}
        stroke={contorno ? "currentColor" : "none"}
        strokeWidth={contorno ? espessura : undefined}
        fillRule="evenodd"
      />
    </svg>
  );
}
