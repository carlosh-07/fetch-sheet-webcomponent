import React from "react";
import HermanoName from "../StyledComponents/HermanoName";
import Container from "../Container";
import Section from "../StyledComponents/Section";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Carousel } from "react-responsive-carousel";
import { HermanoData } from "../Types/HermanoData";
import { Styled } from "direflow-component";
import CarouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from "../styles.css";
import { ImageLoader } from "./ImageLoader";

interface LineStripProps {
  groupPic: string;
  hermanoData: HermanoData[];
  index: number;
  line: string;
}

const LineStrip: React.FC<LineStripProps> = ({
  groupPic,
  hermanoData,
  index,
  line,
}) => {
  const { width } = useWindowDimensions();

  return (
    <Styled styles={[CarouselStyles, styles]}>
      <Section index={index}>
        <h1>{line}</h1>
        <Container>
          {groupPic && (
            <div className="imageContainer">
              <img
                alt={`${line} Line group pic`}
                className="linePic"
                src={`data:image/png;base64, ${groupPic}`}
              />
            </div>
          )}
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
                  <div key={hermano?.number}>
                    <ImageLoader
                      alt={`Hermano ${hermano?.first_name} ${hermano?.last_name}`}
                      src={hermano?.image}
                    />
                    <HermanoName className="legend">{`${hermano?.number} - ${
                      hermano?.first_name
                    } ${hermano?.last_name} ${
                      hermano?.country_data?.flag_data?.emoji ?? ""
                    }`}</HermanoName>
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
