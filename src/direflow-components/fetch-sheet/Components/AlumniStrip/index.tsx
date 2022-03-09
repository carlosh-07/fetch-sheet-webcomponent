import React from "react";
import DesktopAlumniStrip from "./Desktop";
import MobileAlumniStrip from "./Mobile";
import { AlumniStripProps } from "./types";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const AlumniStrip: React.FC<AlumniStripProps> = ({ alumnus }) => {
  const { width } = useWindowDimensions();

  if (width > 570) {
    return <DesktopAlumniStrip alumnus={alumnus} />;
  }
  return <MobileAlumniStrip alumnus={alumnus} />;
};

export default AlumniStrip;
