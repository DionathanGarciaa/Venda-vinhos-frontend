import styled from "styled-components";
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
  select,
  option {
    padding: 10px;
    width: 50%;
    border-radius: 5px;
    border: none;
  }

  button {
    margin-top: 20px;
    color: #fff;
    width: 250px;
    height: 50px;
    border: none;
    background-color: #722f37;
    border-radius: 2px;
    cursor: pointer;
    font-size: 20px;
    font-family: "PT Sans Narrow", sans-serif;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #722f37;
  height: 350px;
  width: 500px;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 5px 5px 5px ${darken(0.2, "#722f37")};
  overflow: hidden;

  span {
    color: #fff;
  }
`;

export const Card = styled.div`
  padding: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 5px ${darken(0.1, "#000")};
  text-decoration: none;
  color: black;
  width: 80%;
  height: 50%;
  margin: 5px;
  border-radius: 5px;

  p {
    margin: 5px;
  }
`;
