import React from "react";
import image from "./image";
import { Styled } from "direflow-component";
import HermanoName from "./HermanoName";
import Container from "./Container";
import Section from "./Section";
import Hermanos from "../../../test.json";
import styles from "./styles.css";
import useWindowDimensions from "./hooks/useWindowDimensions";
import CarouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <Styled styles={[CarouselStyles, styles]}>
      <Section index={0}>
        <h1>Alpha Line</h1>
        <Container>
          <div className="imageContainer">
            <img className="linePic" src={`data:image/png;base64, ${image}`} />
          </div>
          <div>
            <Carousel
              width={width < 400 ? 275 : 375}
              infiniteLoop={true}
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
            >
              {Hermanos.map((hermano) => {
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

export default App;
