import styled from "styled-components";

export const DefaultFooter = styled.footer`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .social {
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #e4e4e4;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    a {
      margin-left: 20px;
      svg {
        color: #000;
        font-size: 20px;
      }
    }
  }
`;
