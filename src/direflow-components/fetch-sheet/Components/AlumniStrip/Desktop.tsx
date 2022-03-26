import React from "react";
import AlumniInfo from "./AlumniInfo";
import { AlumniStripProps } from "./types";

import LinkedInIcon from "../../icons/LinkedInIcon";
import { ImageLoader } from "../ImageLoader";

const DesktopAlumniStrip: React.FC<AlumniStripProps> = ({ alumnus }) => {
  return (
    <section className="display-flex justify-content-center margin-top-l">
      <ImageLoader
        src={alumnus?.image}
        height={200}
        alt={`${alumnus.first_name} ${alumnus.last_name}`}
        fallBackType="grad"
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
          <a
            className="display-flex"
            href={alumnus.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        )}
      </AlumniInfo>
    </section>
  );
};

export default DesktopAlumniStrip;
