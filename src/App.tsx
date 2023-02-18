import React, { useState } from "react";
import dungeonMap from "./assets/map.png";
import { RoomViewer } from "./components/RoomViewer/RoomViewer";
import { rooms } from "./content/rooms";
import { useMousePosition } from "./hooks/useMousePosition";

function App() {
  const mousePosition = useMousePosition();
  const [currentRoom, setCurrentRoom] = useState<number>(0);
  const [showRoomInfo, setShowRoomInfo] = useState<boolean>(false);
  return (
    <main>
      <h1>MegaDungeon</h1>
      {JSON.stringify(mousePosition)}
      <figure>
        <img
          src={dungeonMap}
          alt="Dungeon map, generated with donjon"
          onMouseEnter={() => {
            setShowRoomInfo(true);
          }}
          onMouseLeave={() => {
            setShowRoomInfo(false);
          }}
        />
      </figure>
      {showRoomInfo && (
        <RoomViewer
          mousePosition={mousePosition}
          roomData={rooms[currentRoom]}
        />
      )}
    </main>
  );
}

export default App;
