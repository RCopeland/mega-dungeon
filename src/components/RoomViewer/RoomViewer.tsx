import React from "react";

export interface RoomData {
  name: string;
  description: string;
}

export function RoomViewer({
  roomData,
  mousePosition,
}: {
  roomData: RoomData;
  mousePosition: { x: number; y: number };
}) {
  return (
    <aside
      className="absolute max-w-5xl text-lg top-0 right-0 max-w-xl p-4 bg-slate-600 text-white rounded m-4 z-30"
      style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}
    >
      <header>
        <h2 className="font-bold text-xl mb-2">{roomData.name}</h2>
      </header>
      <p>{roomData.description}</p>
    </aside>
  );
}
