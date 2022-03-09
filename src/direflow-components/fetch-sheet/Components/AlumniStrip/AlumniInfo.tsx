import styled from "styled-components";

const AlumniInfo = styled.div`
  background: linear-gradient(
      0deg,
      rgba(101, 56, 25, 0.5),
      rgba(101, 56, 25, 0.75)
    ),
    url(https://static.wixstatic.com/media/825ad7_2584e93667d14770812950be477a53ad~mv2.png);

  background-size: auto;
  background-repeat: repeat;
  background-position: center center;
  color: white;
  font-family: "Helvetica-W01-Roman", Helvetica;
  font-size: 20px;
  font-weight: 100;
  text-align: center;
  overflow: auto;
  flex-grow: 1;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  grid-area: content;

  > p {
    margin: 0;
    line-height: 1.5em;
  }

  svg {
    margin-top: 8px;
    fill: white;
  }

  a {
    justify-content: space-around;
  }

  @media only screen and (max-width: 570px) {
    min-height: 150px;
    max-height: 200px;
  }
  @media only screen and (max-width: 571px) {
    height: 200px;
  }
`;

export default AlumniInfo;
