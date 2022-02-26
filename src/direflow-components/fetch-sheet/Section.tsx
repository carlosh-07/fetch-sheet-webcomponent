import styled from "styled-components";

interface StyledSection {
  index: number;
}

const Section = styled.section<StyledSection>`
  color: ${(props) => (props.index === 3 ? "#EEAA00" : "white")};
  background-color: ${(props) => {
    if (props.index === 1) {
      return "white";
    }
    if (props.index === 2) {
      return "#653819";
    }

    return "#EEAA00";
  }};
  padding-bottom: 10px;
`;

export default Section;
