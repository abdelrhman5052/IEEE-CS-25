import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="min-h-screen bg-blue-400 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold mb-6">Stopwatch</h1>

      <div className="bg-blue-500 rounded-2xl p-8 shadow-lg flex flex-col items-center">
        <div className="w-64 h-64 bg-blue-600 rounded-full flex items-center justify-center mb-6">
          <span className="text-white text-3xl font-mono">{formatTime(time)}</span>
        </div>

        <div className="flex gap-4">
          <button
            name="pused"
            onClick={() => setIsRunning(!isRunning)}
            className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800"
          >
            {isRunning ? "Pause" : "Resume"}
          </button>
          <button
            name="reset"
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
            className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
