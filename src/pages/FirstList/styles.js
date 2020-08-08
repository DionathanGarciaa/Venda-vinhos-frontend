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

  @media (max-width: 800px) {
    margin-top: 200px;
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
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    max-width: 70vw;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 5px ${darken(0.1, "#000")};
  text-decoration: none;
  color: black;
  width: 100%;
  margin: 5px;
  border-radius: 2px;
`;
