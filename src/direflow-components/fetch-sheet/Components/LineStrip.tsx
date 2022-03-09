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
                    <img
                      src={
                        hermano?.image
                          ? `data:image/png;base64, ${hermano?.image}`
                          : "https://i.pinimg.com/564x/e4/7c/a3/e47ca33e179db1ee90869cbb20e4bc5e.jpg"
                      }
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
