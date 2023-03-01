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
    <aside className="text-lg text-white">
      <div
        className="fixed top-0 left-0 z-30 opacity-80 bg-slate-400 w-screen h-screen 2xl:hidden"
        onClick={() => {
          closeRoom();
        }}
      />
      <div className="fixed z-40 top-0 right-0 max-w-xl h-screen 2xl:h-auto 2xl:m-8 2xl:static bg-slate-600 p-4 max-w-5xl 2xl:mx-auto 2xl:rounded shadow-2xl">
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
