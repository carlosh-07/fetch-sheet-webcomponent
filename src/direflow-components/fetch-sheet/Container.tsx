import styled from "styled-components";

const Container = styled.div`
  justify-content: center;

  .imageContainer {
    display: flex;
  }

  @media screen and (max-width: 400px) {
    .linePic {
      width: 275px;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 1000px) {
    .linePic {
      width: 375px;
    }
  }

  @media screen and (max-width: 1000px) {
    display: grid;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;

    .linePic {
      height: 375px;
    }
  }
`;

export default Container;
