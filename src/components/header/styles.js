import styled from "styled-components";

export const DefaultHeader = styled.header`
  widht: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #101010;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 10px 0;

  .header__left {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .gatsby-image-wrapper {
      border-radius: 100%;
      margin-right: 10px;
    }
    h1 {
      color: #FFF;
    }
  }
`;
