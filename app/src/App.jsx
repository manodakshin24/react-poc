import { useState } from "react";

const alertRoom = "44";

const responders = {
  44: ["Security Team", "Nurse Williams"],
  43: ["Security Team", "Nurse Hartland"],
  42: ["Security Team", "Nurse Jackson"],
  41: ["Security Team", "Nurse Dallas"],
  29: ["Security Team", "Nurse Kennedy"],
  30: ["Security Team", "Nurse Wilson"],
  31: ["Security Team", "Nurse Jones"],
  32: ["Security Team", "Nurse Shanmugam"],
  33: ["Security Team", "Nurse Spence"],
  24: ["Security Team", "Nurse Taylor"],
  28: ["Security Team", "Nurse Morgan"],
  26: ["Security Team", "Nurse Lee"],
  17: ["Security Team", "Nurse Brown"],
  16: ["Security Team", "Nurse Davis"],
  14: ["Security Team", "Nurse Clark"],
  15: ["Security Team", "Nurse Adams"],
  18: ["Security Team", "Nurse Green"],
  19: ["Security Team", "Nurse Hall"],
  20: ["Security Team", "Nurse King"],
  "3A": ["Security Team", "Nurse Moore"],
  3: ["Security Team", "Nurse White"],
  23: ["Security Team", "Nurse Scott"],
  22: ["Security Team", "Nurse Young"],
  21: ["Security Team", "Nurse Evans"],
  45: ["Security Team", "Nurse Brighton"],
  13: ["Security Team", "Nurse Patel"],
  10: ["Security Team", "Nurse Rivera"],
  8: ["Security Team", "Nurse Kim"],
  6: ["Security Team", "Nurse Lewis"],
  "4A": ["Security Team", "Nurse Clark"],
  4: ["Security Team", "Nurse Adams"],
  12: ["Security Team", "Nurse Davis"],
  11: ["Security Team", "Nurse Green"],
  9: ["Security Team", "Nurse Hall"],
  7: ["Security Team", "Nurse King"],
  5: ["Security Team", "Nurse Moore"],
  211: ["Security Team", "Nurse Patel"],
  209: ["Security Team", "Nurse Rivera"],
  207: ["Security Team", "Nurse Kim"],
  205: ["Security Team", "Nurse Lewis"],
  203: ["Security Team", "Nurse Clark"],
  200: ["Security Team", "Nurse Adams"],
  212: ["Security Team", "Nurse Davis"],
  210: ["Security Team", "Nurse Green"],
  208: ["Security Team", "Nurse Hall"],
  206: ["Security Team", "Nurse King"],
  204: ["Security Team", "Nurse Moore"],
  202: ["Security Team", "Nurse White"],
  201: ["Security Team", "Nurse Scott"],
};

const rooms = [
  {
    id: "44",
    points: "62.5,45 67.5,45 67.5,48 62.5,48",
  },
  {
    id: "43",
    points: "62.5,40 67.5,40 67.5,44 62.5,44",
  },
  {
    id: "42",
    points: "62.5,35 67.5,35 67.5,39 62.5,39",
  },
  {
    id: "41",
    points: "62.5,30 67.5,30 67.5,35 62.5,35",
  },
  {
    id: "29",
    points: "31,35.5 39,35.5 39,41 31,41",
  },
  {
    id: "30",
    points: "34,29 40,29 40,34 34,34",
  },
  {
    id: "31",
    points: "31,24.5 39,24.5 39,29 31,29",
  },
  {
    id: "32",
    points: "31,16 38,16 38,20 31,20",
  },
  {
    id: "33",
    points: "31,10.5 38,10.5 38,15.5 31,15.5",
  },
  {
    id: "28",
    points: "33,45 39.5,45 39.5,47.5 33,47.5",
  },
  {
    id: "26",
    points: "33,48 39.5,48 39.5,50 33,50",
  },
  {
    id: "24",
    points: "33,50.5 39.5,50.5 39.5,56.5 33,56.5",
  },
  {
    id: "17",
    points: "33,59.5 39.5,59.5 39.5,65 33,65",
  },
  {
    id: "16",
    points: "33,67 39.5,67 39.5,70 33,70",
  },
  {
    id: "14",
    points: "33,70.5 39.5,70.5 39.5,73.5 33,73.5",
  },
  {
  id: "15",
  points: "41,63 46,63 46,68 41,68",
  },
  {
    id: "18",
    points: "46,63 49,63 49,68 46,68",
  },
  {
    id: "19",
    points: "49,63 54,63 54,67 49,67",
  },
  {
    id: "20",
    points: "54.5,63 60.5,63 60.5,67 54.5,67",
  },
  {
    id: "3A",
    points: "55.5,68 60.5,68 60.5,73.5 55.5,73.5",
  },
  {
    id: "3",
    points: "61,68 66,68 66,73.5 61,73.5",
  },
  {
    id: "23",
    points: "41.5,54 46,54 46,61 41.5,61",
  },
  {
    id: "22",
    points: "47.5,58 53.5,58 53.5,61 47.5,61",
  },
  {
    id: "21",
    points: "54.5,54 60.5,54 60.5,58 54.5,58",
  },
  {
    id: "45",
    points: "62.5,48 67.5,48 67.5,50 62.5,50",
  },
    {
    id: "13",
    points: "33,74.5 39,74.5 39,78.5 33,78.5",
  },
  {
    id: "10",
    points: "41,74.5 46,74.5 46,78.5 41,78.5",
  },
  {
    id: "8",
    points: "46,74.5 51,74.5 51,78.5 46,78.5",
  },
  {
    id: "6",
    points: "51,74.5 56,74.5 56,78.5 51,78.5",
  },
  {
    id: "4A",
    points: "63,74.5 69,74.5 69,76.5 63,76.5",
  },
  {
    id: "4",
    points: "60.5,76.5 69.2,76.5 69.2,83.5 60.5,83.5",
  },
  {
    id: "12",
    points: "33,79.8 39,79.8 39,83.5 33,83.5",
  },
  {
    id: "11",
    points: "41,79.8 46,79.8 46,83.5 41,83.5",
  },
  {
    id: "9",
    points: "46,79.8 51,79.8 51,83.5 46,83.5",
  },
  {
    id: "7",
    points: "51,79.8 56,79.8 56,83.5 51,83.5",
  },
  {
    id: "5",
    points: "56,79.8 60.5,79.8 60.5,83.5 56,83.5",
  },
    {
    id: "211",
    points: "33.5,86.5 40,86.5 40,90.5 33.5,90.5",
  },
  {
    id: "209",
    points: "40,86.5 47.5,86.5 47.5,90.5 40,90.5",
  },
  {
    id: "207",
    points: "47.5,86.5 54.5,86.5 54.5,90.5 47.5,90.5",
  },
  {
    id: "205",
    points: "54.5,86.5 60.5,86.5 60.5,90.5 54.5,90.5",
  },
  {
    id: "203",
    points: "60.5,86.5 66.5,86.5 66.5,90.5 60.5,90.5",
  },
  {
    id: "200",
    points: "66.5,86.5 68.5,86.5 68.5,91 66.5,91",
  },
  {
    id: "212",
    points: "33.5,91.5 40,91.5 40,95.5 33.5,95.5",
  },
  {
    id: "210",
    points: "40,91.5 47.5,91.5 47.5,95.5 40,95.5",
  },
  {
    id: "208",
    points: "47.5,91.5 54.5,91.5 54.5,95.5 47.5,95.5",
  },
  {
    id: "206",
    points: "54.5,91.5 60.5,91.5 60.5,95.5 54.5,95.5",
  },
  {
    id: "204",
    points: "60.5,91.5 65,91.5 65,95.5 60.5,95.5",
  },
  {
    id: "202",
    points: "65,91.5 68.5,91.5 68.5,93.5 65,93.5",
  },
  {
    id: "201",
    points: "65,93.5 68.5,93.5 68.5,95.5 65,95.5",
  },
];

export default function App() {
  const [hoveredRoom, setHoveredRoom] = useState(null);


  return (
    <main style={{ padding: 20 }}>
      <h1>Annapolis High School Map</h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 650,
          margin: "0 auto",
        }}
      >
        <img
          src="/school-map.png"
          alt="Annapolis High School floor plan"
          style={{ display: "block", width: "100%" }}
        />

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {rooms.map((room) => (
              <polygon
                key={room.id}
                points={room.points}
                fill={
                  room.id === alertRoom
                    ? "rgba(220, 38, 38, 0.35)"
                    : "transparent"
                }
                stroke="#dc2626"
                strokeWidth="0.6"
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
              />
            ))}
          </svg>

        {hoveredRoom && (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              padding: 12,
              background: "white",
              border: "2px solid #dc2626",
              color: "#111",
            }}
          >
            <strong>Alert: Room {hoveredRoom}</strong>
            <div>
              Responders: {responders[hoveredRoom]?.join(", ")}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}