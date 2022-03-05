import React, { useEffect, useState } from "react";

import LineStrip from "./Components/LineStrip";
import { LineData } from "./Types/LineData";

const App = () => {
  const [lines, setLines] = useState<LineData>([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://fetch-sheet-hhtvfw664q-uc.a.run.app/hermanosPage"
      );
      const data = await response.json();
      console.log(data);

      setLines(data.lines);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
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
            line={line.line}
          />
        );
      })}
    </div>
  );
};

export default App;
