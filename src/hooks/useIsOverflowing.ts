import type React from "react";
import { useEffect, useState } from "react";
import { useDebounce, useScroll, useWindowSize } from "react-use";

const getIsScrollOverflowing = (ref: React.RefObject<HTMLElement>) =>
  !!ref.current && ref.current.clientWidth < ref.current.scrollWidth;
const getIsOverflowingLeft = (x: number) => x > 0;
const getIsOverflowingRight = (ref: React.RefObject<HTMLElement>, x: number) =>
  !!ref.current && x < ref.current.scrollWidth - ref.current.clientWidth;

export const useIsOverflowing = (ref: React.RefObject<HTMLElement>) => {
  const { width } = useWindowSize();
  const { x } = useScroll(ref);
  const [isScrollOverflowing, setIsScrollOverflowing] = useState(
    getIsScrollOverflowing(ref),
  );
  const [isOverflowingLeft, setIsOverflowingLeft] = useState(
    getIsOverflowingLeft(x),
  );
  const [isOverflowingRight, setIsOverflowingRight] = useState(
    getIsOverflowingRight(ref, x),
  );

  useDebounce(
    () => {
      setIsScrollOverflowing(getIsScrollOverflowing(ref));
    },
    250,
    [width],
  );

  useEffect(() => {
    setIsOverflowingLeft(isScrollOverflowing && getIsOverflowingLeft(x));
    setIsOverflowingRight(isScrollOverflowing && getIsOverflowingRight(ref, x));
  }, [x, isScrollOverflowing]);

  return [isOverflowingLeft, isOverflowingRight];
};
