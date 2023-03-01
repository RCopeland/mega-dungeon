import React from "react";
import { CreatureStats } from "../../content/monsters";

export function StatBlock({ data }: { data: CreatureStats }) {
  return (
    <aside className="p-4">
      <header>
        <h3 className="font-bold">{data.name}</h3>
      </header>
      <table className="border-2 border-slate-400 border-slate-400 text-center mb-2">
        <thead>
          <tr>
            <th className="p-2">AC</th>
            <th className="p-2">HD</th>
            <th className="p-2">Move</th>
            <th className="p-2">AL</th>
            <th className="p-2">TT</th>
            <th className="p-2">Xp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.ac}</td>
            <td>{data.hd}</td>
            <td>{data.move}</td>
            <td>{data.al}</td>
            <td>{data.treasuretype}</td>
            <td>{data.xp}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-4 mb-4">
        <div>
          <p className="font-bold">Saves</p>
          <p>
            {data.saves.map((save) => {
              return (
                <span className="mx-1" key={save}>
                  {save}
                </span>
              );
            })}
          </p>
        </div>
        <div>
          <p className="font-bold">Morale</p>
          <p>{data.morale}</p>
        </div>
      </div>
      <p className="text-sm mb-4">{data.desc}</p>
      {data.special && (
        <footer>
          <h4 className="font-bold">Special</h4> <p>{data.special}</p>
        </footer>
      )}
    </aside>
  );
}
