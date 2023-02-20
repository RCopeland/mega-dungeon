import React from "react";
import Draggable from "react-draggable";
import { Position } from "../../App";

export function DraggableToken({
  color,
  defaultPosition,
  mousePosition,
}: {
  color: string;
  defaultPosition: Position;
  mousePosition: Position;
}) {
  return (
    <Draggable
      defaultPosition={defaultPosition}
      grid={[25, 25]}
      scale={1}
      onStop={() => {
        console.log("store position");
      }}
    >
      <button
        className={`relative rounded-3xl p-6 z-20 ${color}`}
        role="button"
      />
    </Draggable>
  );
}
