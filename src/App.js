import { useState } from "react";

import EachProgressBar from "./EachProgressBar.js";

export default function App() {
  const [progressCount, setProgressCount] = useState(0);

  return (
    <div>
      <button onClick={() => setProgressCount((prev) => prev + 1)}>Add</button>

      {Array(progressCount)
        .fill()
        .map((index) => {
          return <EachProgressBar key={index} />;
        })}
    </div>
  );
}
