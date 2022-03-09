import React from "react";
import AlumniInfo from "./AlumniInfo";
import { AlumniStripProps } from "./types";

import LinkedInIcon from "../../icons/LinkedInIcon";

const DesktopAlumniStrip: React.FC<AlumniStripProps> = ({ alumnus }) => {
  return (
    <section className="display-flex justify-content-center margin-top-l">
      <img
        src={`${
          alumnus?.image
            ? `data:image/png;base64,${alumnus.image}`
            : "https://i.pinimg.com/564x/29/66/dc/2966dc922e1785ef0a1122eee9246420--free-icon-avatar.jpg"
        }`}
        height={200}
      />
      <AlumniInfo>
        <p id="hermanoName">{`Hermano ${alumnus?.first_name} ${alumnus?.last_name}`}</p>
        <p>{`Pledge Chapter: ${
          alumnus?.pledge_chapter
        } (${alumnus?.line.toUpperCase()} LINE)`}</p>
        <p>{`Class of ${alumnus?.graduation_year} ${
          alumnus?.graduation_semester
            ? ` (${alumnus.graduation_semester}) `
            : ""
        }${alumnus?.major && `- ${alumnus?.major}`}`}</p>
        {alumnus?.linkedin && (
          <a className="display-flex" href={alumnus.linkedin}>
            <LinkedInIcon />
          </a>
        )}
      </AlumniInfo>
    </section>
  );
};

export default DesktopAlumniStrip;
