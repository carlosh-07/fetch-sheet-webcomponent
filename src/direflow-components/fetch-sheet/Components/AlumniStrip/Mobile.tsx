import React from "react";
import LinkedInIcon from "../../icons/LinkedInIcon";
import { ImageLoader } from "../ImageLoader";

import AlumniInfo from "./AlumniInfo";
import GriddedSection from "./Gridded";
import { AlumniStripProps } from "./types";

const MobileAlumniStrip: React.FC<AlumniStripProps> = ({ alumnus }) => {
  return (
    <GriddedSection>
      <ImageLoader
        alt={`${alumnus.first_name} ${alumnus.last_name}`}
        fallBackType="grad"
        src={alumnus?.image}
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
