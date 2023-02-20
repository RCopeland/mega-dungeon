import { roomDescriptions } from "./roomDescriptions";

export interface RoomData {
  id: string;
  title: string;
  name: string;
  description: string;
  shape: string;
  fillColor: string;
  strokeColor: string;
  coords: number[][];
}

const fillColor = "#eab54d4d";
const strokeColor = "black";
const shape = "rect";

const roomCoords = [
  [20, 20, 217, 180],
  [270, 20, 397, 180],
  [450, 20, 575, 145],
  [415, 163, 612, 290],
  [55, 199, 180, 360],
  [200, 200, 325, 360],
  [340, 307, 507, 507],
  [55, 380, 216, 578],
  [236, 524, 433, 649],
  [451, 524, 576, 648],
  [20, 595, 215, 720],
  [236, 668, 432, 792],
  [450, 668, 613, 791],
  [523, 308, 578, 398],
  [236, 380, 325, 467],
  [558, 416, 612, 503],
  [20, 739, 145, 792],
  [163, 740, 215, 792],
];

export const rooms = {
  name: "the-scrape",
  areas: roomDescriptions.map((room, index) => {
    return {
      id: room.name.toLowerCase().replace(" ", "-"),
      title: room.name,
      name: room.name,
      description: room.description,
      shape,
      fillColor,
      strokeColor,
      coords: roomCoords[index],
    };
  }),
};
