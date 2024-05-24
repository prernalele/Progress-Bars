import { useState, useEffect } from "react";

const EachProgressBar = ({ index }) => {
  const [addWidth, setAddWidth] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (addWidth < 100) {
        setAddWidth((prev) => prev + 100 / 200);
      }
      if (addWidth === 100) return;
    }, 10);
    return () => {
      clearInterval(timerId);
    };
  }, [addWidth]);

  return (
    <div key={index} className="progress-bar">
      <div style={{ width: `${addWidth}%` }} className="fill"></div>
    </div>
  );
};

export default EachProgressBar;
