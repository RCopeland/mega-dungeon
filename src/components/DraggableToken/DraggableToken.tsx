import React from "react";
import Draggable from "react-draggable";
import { Position } from "../../App";

export function DraggableToken({
  color,
  defaultPosition,
  mousePosition,
}: {
  color?: string;
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
        className={`absolute bg-pink-600 rounded-3xl p-6 z-20 top-0 left-0 ${color}`}
        role="button"
      />
    </Draggable>
  );
}
