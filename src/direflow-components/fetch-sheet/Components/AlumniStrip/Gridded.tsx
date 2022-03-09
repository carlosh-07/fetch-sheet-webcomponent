import styled from "styled-components";

const GriddedSection = styled.section`
  display: grid;
  grid-template:
    "image name" 100px
    "content content" / 100px auto;
  margin-top: 5px;

  > #hermanoName {
    align-items: center;
    background-color: #653819;
    color: white;
    display: flex;
    flex-direction: column;
    font-family: "Lulo Clean";
    font-size: 12px;
    justify-content: center;

    > h2 {
      margin: 0px;
      text-align: center;
    }
  }

  > img {
    height: 100%;
  }

  @media only screen and (max-width: 333px) {
    > #hermanoName {
      font-size: 10px;
    }
  }
`;

export default GriddedSection;
