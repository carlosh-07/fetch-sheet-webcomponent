import React from "react";
import LinkedInIcon from "../../icons/LinkedInIcon";

import AlumniInfo from "./AlumniInfo";
import GriddedSection from "./Gridded";
import { AlumniStripProps } from "./types";

const MobileAlumniStrip: React.FC<AlumniStripProps> = ({ alumnus }) => {
  return (
    <GriddedSection>
      <img
        src={`${
          alumnus?.image
            ? `data:image/png;base64,${alumnus.image}`
            : "https://i.pinimg.com/564x/29/66/dc/2966dc922e1785ef0a1122eee9246420--free-icon-avatar.jpg"
        }`}
        alt={`${alumnus.first_name} ${alumnus.last_name}`}
      />
      <div id="hermanoName">
        <h2>Hermano</h2>
        <h2>{`${alumnus?.first_name} ${alumnus?.last_name}`}</h2>
      </div>
      <AlumniInfo>
        <p>{`Pledge Chapter: ${
          alumnus?.pledge_chapter
        } (${alumnus?.line.toUpperCase()} LINE)`}</p>
        <p>{`Class of ${alumnus?.graduation_year} ${
          alumnus?.graduation_semester
            ? ` (${alumnus.graduation_semester}) `
            : ""
        }${alumnus?.major && `- ${alumnus?.major}`}`}</p>
        {alumnus?.linkedin && (
          <a
            className="display-flex"
            href={alumnus.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon height={25} />
          </a>
        )}
      </AlumniInfo>
    </GriddedSection>
  );
};

export default MobileAlumniStrip;
