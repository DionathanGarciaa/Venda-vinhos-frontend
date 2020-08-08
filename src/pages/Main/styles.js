import styled from "styled-components";
import { Link } from "react-router-dom";

import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  h1 {
    color: #fff;
  }
  @media (max-width: 800px) {
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #722f37;
  height: 350px;
  width: 500px;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 5px 5px 5px ${darken(0.2, "#722f37")};

  @media (max-width: 800px) {
    max-width: 70vw;
  }
`;

export const Card = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 5px ${darken(0.1, "#000")};
  text-decoration: none;
  color: black;
  @media (max-width: 800px) {
    max-width: 80vw;
  }

  width: 100%;
  height: 20%;
  border-radius: 5px;
  cursor: pointer;
`;
