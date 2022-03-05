import React, { useEffect, useState } from "react";

import LineStrip from "./Components/LineStrip";
import { LineData } from "./Types/LineData";

const App = () => {
  const [lines, setLines] = useState<LineData>([]);

  const getLines = async () => {
    try {
      const response = await fetch(
        "https://fetch-sheet-hhtvfw664q-uc.a.run.app/line/alpha"
      );
      const data = await response.json();
      console.log(data);

      const linesToSet = [];

      linesToSet.push(data);

      setLines(linesToSet);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLines();
  }, []);

  console.log(lines);

  return (
    <div>
      {lines.map((line, index) => {
        return (
          <LineStrip
            groupPic={line.group_pic}
            hermanoData={line.hermanoData}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default App;
