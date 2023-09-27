import React, { useState, useCallback } from "react";
import "./App.css";

export default function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const onSelectSeat = useCallback((seatNo) => {
    setSelectedSeats((prev) => {
      if (prev.length === 2) {
        prev.shift();
      }
      return [...prev, seatNo];
    });
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {[...Array(60)].map((_, index) => (
          <span
            onClick={() => onSelectSeat(index)}
            key={index}
            className={`seat ${
              selectedSeats.includes(index) ? "selected" : ""
            }`}
          >
            {selectedSeats.includes(index) ? index + 1 : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
