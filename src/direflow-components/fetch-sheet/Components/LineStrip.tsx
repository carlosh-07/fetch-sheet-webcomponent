import React from "react";
import HermanoName from "../HermanoName";
import Container from "../Container";
import Section from "../Section";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Carousel } from "react-responsive-carousel";
import { HermanoData } from "../Types/HermanoData";
import { Styled } from "direflow-component";
import CarouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from "../styles.css";

interface LineStripProps {
  groupPic: string;
  hermanoData: HermanoData[];
  index: number;
}

const LineStrip: React.FC<LineStripProps> = ({
  groupPic,
  hermanoData,
  index,
}) => {
  const { width } = useWindowDimensions();

  return (
    <Styled styles={[CarouselStyles, styles]}>
      <Section index={index}>
        <h1>Alpha Line</h1>
        <Container>
          <div className="imageContainer">
            <img
              className="linePic"
              src={`data:image/png;base64, ${groupPic}`}
            />
          </div>
          <div>
            <Carousel
              width={width < 400 ? 275 : 375}
              infiniteLoop={true}
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
            >
              {hermanoData.map((hermano) => {
                return (
                  <div key={hermano.number}>
                    <img src={`data:image/png;base64, ${hermano.image}`} />
                    <HermanoName className="legend">{`${hermano.number} - ${hermano.first_name} ${hermano.last_name} ${hermano.country_data.flag_data.emoji}`}</HermanoName>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Container>
      </Section>
    </Styled>
  );
};

export default LineStrip;
