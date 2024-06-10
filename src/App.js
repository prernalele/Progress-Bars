import { useState } from "react";
import "./App.css";
import EachProgressBar from "./EachProgressBar";

export default function App() {
  const [progressCount, setProgressCount] = useState(0);

  return (
    <div className="container">
      <button
        className="styledButton"
        onClick={() => {
          setProgressCount((prev) => prev + 1);
        }}
      >
        Click me to add progress bars
      </button>
      <div className="progressBarContainer">
        {Array(progressCount)
          .fill()
          .map((index) => {
            return <EachProgressBar key={index} />;
          })}
      </div>
    </div>
  );
}
