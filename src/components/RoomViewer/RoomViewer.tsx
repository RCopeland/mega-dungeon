import React from "react";

export interface RoomData {
  name: string;
  readAloudText: string;
  description: string;
}

export function RoomViewer({
  roomData,
  closeRoom,
}: {
  roomData: RoomData | null;
  closeRoom: () => void;
}) {
  return (
    <aside className="fixed 2xl:static top-0 left-0 w-full 2xl:w-auto z-30 text-lg text-white p-6">
      <div className="bg-slate-600 p-4 max-w-5xl mx-auto rounded shadow-2xl">
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
