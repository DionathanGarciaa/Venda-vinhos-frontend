import { keyframes } from "styled-components";
import styled from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 0;
  position: relative;

  height: 100vh;
  width: 100vw;
  background-color: #3c191d;
  font-family: "Raleway", sans-serif;
  /* font-size: px; */

  h1 {
    /* font-size: 50px; */
    font-weight: 300;
  }

  div.overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 500px;
    height: 350px;
    position: fixed;
    #spinner {
      align-self: center;
      z-index: 3;
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const Image = styled.div`
  img {
    max-height: 300px;
  }
  position: absolute;
  z-index: 1;
  top: 45%;
  left: 70vw;
`;
