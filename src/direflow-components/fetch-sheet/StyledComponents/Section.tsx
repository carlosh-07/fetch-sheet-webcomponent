import styled from "styled-components";

interface StyledSection {
  index: number;
}

const Section = styled.section<StyledSection>`
  color: ${(props) => (props.index === 2 ? "WHITE" : "#EEAA00")};
  background-color: ${(props) => {
    if (props.index === 1) {
      return "#653819";
    }
    if (props.index === 2) {
      return "#EEAA00";
    }

    return "WHITE";
  }};
  padding-bottom: 10px;
`;

export default Section;
