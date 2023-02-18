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
  const [showRoomInfo, setShowRoomInfo] = useState<boolean>(false);

  return (
    <main className="relative">
      <figure className="flex items-center justify-center p-16">
        <ImageMapper
          map={rooms}
          width={631}
          height={811}
          src={dungeonMap}
          active={true}
          onMouseEnter={(e) => {
            const selectedRoom = rooms.areas.find((room) => room.id === e.id);
            setCurrentRoom(selectedRoom || null);
            setShowRoomInfo(true);
          }}
          onMouseLeave={() => {
            setShowRoomInfo(false);
          }}
          responsive
          parentWidth={window.innerWidth / 2.5}
        />
        <figcaption>
          <h1>MegaDungeon</h1>
        </figcaption>
      </figure>
      {showRoomInfo && currentRoom && (
        <RoomViewer mousePosition={mousePosition} roomData={currentRoom} />
      )}
      <DraggableToken
        defaultPosition={{ x: 100, y: 100 }}
        mousePosition={mousePosition}
      />
      <DraggableToken
        defaultPosition={{ x: 100, y: 200 }}
        color="bg-purple-500"
        mousePosition={mousePosition}
      />
      <DraggableToken
        defaultPosition={{ x: 100, y: 300 }}
        color="bg-orange-500"
        mousePosition={mousePosition}
      />
    </main>
  );
}

export default App;
