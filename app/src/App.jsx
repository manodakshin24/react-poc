

import { useState } from "react";
import { createWorker } from "tesseract.js";

export default function App() {
  const [status, setStatus] = useState("");
  const [rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomTargets, setRoomTargets] = useState([]);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  async function extractRooms() {
    setStatus("Reading map...");
    setRooms([]);

    const worker = await createWorker("eng");
    const result = await worker.recognize("/school-map.png", {}, { blocks: true });
    const words =
        result.data.blocks
          ?.flatMap((block) => block.paragraphs)
          .flatMap((paragraph) => paragraph.lines)
          .flatMap((line) => line.words) ?? [];
    const foundTargets = words
      .filter((word) => {
        const roomNumber = word.text.trim();
        const centerX = (word.bbox.x0 + word.bbox.x1) / 2;
        const isWithinFloorPlan = centerX > imageSize.width * 0.28 &&
          centerX < imageSize.width * 0.76;

        return /^\d{1,3}$/.test(roomNumber) && isWithinFloorPlan;
      })
      .map((word) => ({
        room: word.text.trim(),
        bbox: word.bbox,
      }));

    setRooms([...new Set(foundTargets.map((target) => target.room))]);
    setRoomTargets(foundTargets);
    setStatus(`Found ${foundTargets.length} possible room numbers.`);
    await worker.terminate();
  }

  function toggleRoom(room) {
    setSelectedRooms((currentRooms) =>
      currentRooms.includes(room)
        ? currentRooms.filter((selectedRoom) => selectedRoom !== room)
        : [...currentRooms, room],
    );
  }

  return (
    <main>
      <h1>Annapolis High School Map</h1>

      <button type="button" onClick={extractRooms}>
        Extract room numbers
      </button>

      {status && <p>{status}</p>}

      <div style={{ position: "relative", width: "100%", maxWidth: 760 }}>
        <img
          src="/school-map.png"
          alt="Annapolis High School floor plan"
          onLoad={(event) =>
            setImageSize({
              width: event.currentTarget.naturalWidth,
              height: event.currentTarget.naturalHeight,
            })
          }
          style={{ width: "100%", display: "block" }}
        />

        {imageSize.width > 0 &&
          roomTargets.map((target, index) => {
            const isSelected = selectedRooms.includes(target.room);
            const left = (target.bbox.x0 / imageSize.width) * 100;
            const top = (target.bbox.y0 / imageSize.height) * 100;
            const width =
              ((target.bbox.x1 - target.bbox.x0) / imageSize.width) * 100;
            const height =
              ((target.bbox.y1 - target.bbox.y0) / imageSize.height) * 100;

            return (
              <button
                key={`${target.room}-${index}`}
                type="button"
                aria-label={`Room ${target.room}`}
                aria-pressed={isSelected}
                onClick={() => toggleRoom(target.room)}
                style={{
                  position: "absolute",
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${Math.max(width, 4)}%`,
                  height: `${Math.max(height, 2.5)}%`,
                  zIndex: 1,
                  padding: 0,
                  border: "2px solid #e83e3e",
                  background: isSelected
                    ? "rgba(232, 62, 62, 0.4)"
                    : "rgba(232, 62, 62, 0.12)",
                  cursor: "pointer",
                }}
              />
            );
          })}
      </div>
    </main>
  );
}