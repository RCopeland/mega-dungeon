import React from "react";
import { RoomData } from "../../content/roomDescriptions";
import { StatBlock } from "../StatBlock/StatBlock";
import { monsters } from "../../content/monsters";

function getMonsters(name: string) {
  return monsters.find((monster) => monster.name === name);
}

export function RoomViewer({
  roomData,
  closeRoom,
}: {
  roomData: RoomData | null;
  closeRoom: () => void;
}) {
  return (
    <aside className="fixed lg:static lg:max-h-full left-8 top-8 bottom-8 right-8 z-40 text-lg text-white overflow-scroll rounded">
      <div className="bg-slate-600 p-4 max-w-5xl">
        {roomData ? (
          <>
            <header className="flex items-center mb-2 justify-between">
              <h2 className="font-bold text-xl">{roomData.name}</h2>
              <button className="2xl:hidden" onClick={() => closeRoom()}>
                Close
              </button>
            </header>
            <p className="bg-slate-800 p-4">{roomData.readAloudText}</p>
            <p className="p-4">{roomData.description}</p>
            <div>
              {roomData.monsters?.map((monster) => {
                const monsterData = getMonsters(monster.name);
                return monsterData ? <StatBlock data={monsterData} /> : <></>;
              })}
            </div>
          </>
        ) : (
          <>
            <header>
              <h2 className="font-bold text-xl mb-2">Room Viewer</h2>
              <button className="2xl:hidden" onClick={() => closeRoom()}>
                Close
              </button>
            </header>
            <p>Select a Room</p>
          </>
        )}
      </div>
    </aside>
  );
}
