import React, { useEffect, useState } from "react";
import AlumniStrip from "./Components/AlumniStrip";

import LineStrip from "./Components/LineStrip";
import { AlumniData } from "./Types/AlumniData";
import { LineData } from "./Types/LineData";
import { Styled } from "direflow-component";

import styles from "./styles.css";
import AlumTitleSection from "./StyledComponents/AlumTitleSection";

const App = () => {
  const [lines, setLines] = useState<LineData>([]);
  const [alumni, setAlumni] = useState<AlumniData>([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://fetch-sheet-hhtvfw664q-uc.a.run.app/hermanosPage"
      );
      const data = await response.json();

      setLines(data.lines);
      setAlumni(data.alumni);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Styled styles={[styles]}>
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
        <AlumTitleSection>
          <hr id="gold" />
          <h1>UGA Alumni</h1>
          <hr id="red" />
          {alumni.map((alumnus, index) => (
            <AlumniStrip alumnus={alumnus} key={index} />
          ))}
        </AlumTitleSection>
      </div>
    </Styled>
  );
};

export default App;
