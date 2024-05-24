import { useState, useEffect } from "react";

export default Progressbar = ({ index }) => {
  const [addWidth, setAddWidth] = useState(0);

  const fillColor = () => {
    if (addWidth < 100) {
      setAddWidth((prev) => prev + 100 / 200);
    }
    if (addWidth === 100) return;
  };

  useEffect(() => {
    const timerId = setInterval(fillColor, 10);
    return () => {
      clearInterval(timerId);
    };
  }, [addWidth, fillColor]);

  return (
    <div key={index} className="progress-bar">
      <div style={{ width: `${addWidth}%` }} className="fill"></div>
    </div>
  );
};
