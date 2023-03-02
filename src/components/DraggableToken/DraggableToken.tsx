import React, { useRef } from "react";
import Draggable from "react-draggable";
import { Position } from "../../App";

export function DraggableToken({
  color,
  defaultPosition,
}: {
  color: string;
  defaultPosition: Position;
}) {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={defaultPosition}
      grid={[25, 25]}
      scale={1}
    >
      <button
        ref={nodeRef}
        className={`relative rounded-3xl p-4 z-20 ${color}`}
        role="button"
      />
    </Draggable>
  );
}
