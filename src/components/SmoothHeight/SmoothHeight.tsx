import { useCallback, useRef } from "react";
import { useDebounce, useWindowSize } from "react-use";
import type { SmoothHeightProps } from "./types";

export const SmoothHeight = ({ children, className }: SmoothHeightProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const updateHeight = useCallback(() => {
    if (!contentRef.current || !contentRef.current.parentElement) {
      return;
    }

    contentRef.current.parentElement.style.height = `${contentRef.current.offsetHeight}px`;
  }, [contentRef]);

  useDebounce(updateHeight, 250, [width, children]);

  return (
    <div className={`transition-all ${className}`}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
