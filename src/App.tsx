import React from "react";
import dungeonMap from "./assets/map.png";

function App() {
  return (
    <main>
      <h1>MegaDungeon</h1>
      <img src={dungeonMap} alt="Dungeon map, generated with donjon" />
      <aside className="absolute max-w-5xl text-lg top-0 right-0">
        <header>
          <h2>Room Name</h2>
        </header>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          tempora, veniam. Ea nemo numquam officia totam. Ad hic illum iure
          minus nemo officia quam, quis sit soluta ullam vitae voluptas?
        </div>
      </aside>
    </main>
  );
}

export default App;
