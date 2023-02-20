import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import dungeonMap from "./assets/map.png";
import { RoomData, RoomViewer } from "./components/RoomViewer/RoomViewer";
import { rooms } from "./content/rooms";
import { useMousePosition } from "./hooks/useMousePosition";
import { DraggableToken } from "./components/DraggableToken/DraggableToken";

export interface Position {
  x: number;
  y: number;
}

function App() {
  const mousePosition = useMousePosition();
  const [currentRoom, setCurrentRoom] = useState<RoomData | null>(null);
  const [showRoomViewer, setShowRoomViewer] = useState<boolean>(true);

  return (
    <main className="relative w-screen flex flex-col 2xl:flex-row gap-4 max-w-screen-2xl m-auto my-4">
      <figure className="bg-pink-500 m-auto">
        <ImageMapper
          map={rooms}
          width={631}
          height={811}
          src={dungeonMap}
          active={true}
          onClick={(e) => {
            const selectedRoom = rooms.areas.find((room) => room.id === e.id);
            setCurrentRoom(selectedRoom || null);
            setShowRoomViewer(true);
          }}
          responsive
          parentWidth={Math.min(window.innerWidth - 32, 1200)}
        />
      </figure>
      <div className="m-4 relative">
        <h1 className="font-bold text-3xl mb-8">The Scrape</h1>
        <div className="mb-4 px-16">
          <DraggableToken
            color="bg-slate-300"
            defaultPosition={{ x: 0, y: 0 }}
            mousePosition={mousePosition}
          />
          <DraggableToken
            defaultPosition={{ x: 25, y: 0 }}
            color="bg-slate-500"
            mousePosition={mousePosition}
          />
          <DraggableToken
            defaultPosition={{ x: 50, y: 0 }}
            color="bg-slate-800"
            mousePosition={mousePosition}
          />
        </div>
        {showRoomViewer && (
          <RoomViewer
            roomData={currentRoom}
            closeRoom={() => {
              setShowRoomViewer(false);
            }}
          />
        )}
      </div>
    </main>
  );
}

export default App;
