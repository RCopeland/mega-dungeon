export interface CreatureStats {
  name: string;
  desc: string;
  hd: string;
  ac: number;
  atk: string[];
  atkbonus: number;
  move: number;
  saves: string[];
  wisbonus: number;
  morale: number;
  al: "L" | "N" | "C";
  xp: number;
  treasuretype: string;
  special: string;
}

export const monsters: CreatureStats[] = [
  {
    name: "Copper Cobra",
    desc: "Bronze cobras are similar to iron cobras, built in ancient days by powerful spell casters as mechanical servants using powerful magic. These jointed snakes are the size of a normal cobra, and follow commands given to them or programmed into them by their creators. Bronze cobras are not as lethal as iron cobras, being made of softer metal and having a five-dose supply of paralysis poison (3d6 turns) rather than a three-dose supply of lethal poison. They are, however, faster than the similar mechanism created from iron.",
    hd: "2",
    ac: 16,
    atkbonus: 1,
    atk: [`1 Bite (1d2 + Poison)`],
    move: 12,
    saves: ["D12", "W13", "P14", "B15", "S16"],
    wisbonus: 0,
    morale: 12,
    al: "N",
    xp: 60,
    treasuretype: "V",
    special: "Non-Lethal Paralysis Poison",
  },
  {
    name: "Gelatinous Cube",
    desc: `10’ cubes of transparent jelly. Move through dungeons, absorbing debris and living creatures they come across.`,
    hd: "4*",
    ac: 11,
    atk: [`1 Touch (2d4 + Paralysis)`],
    atkbonus: 3,
    move: 12,
    saves: ["D12", "W13", "P14", "B15", "S16"],
    morale: 12,
    wisbonus: 2,
    al: "N",
    xp: 60,
    treasuretype: "V",
    special: "Non-Lethal Paralysis Poison",
  },
];
