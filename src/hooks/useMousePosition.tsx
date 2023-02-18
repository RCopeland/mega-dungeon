// https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/
import React, { useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (ev: { clientX: number; clientY: number }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
