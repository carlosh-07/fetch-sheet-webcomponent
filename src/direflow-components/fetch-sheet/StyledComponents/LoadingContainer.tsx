import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #e99f00;
  align-items: center;
  justify-content: center;

  > img {
    min-width: 250px;
    object-position: 2px 0px;
  }
`;

export default LoadingContainer;
