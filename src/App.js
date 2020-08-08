import React from "react";
import { Container, Image } from "./styles.js";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import image from "./assets/undraw_wine_tasting_30vw.svg";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
      <Image>
        <img src={image} alt="ilustração de alguém com vinho"></img>
      </Image>
    </>
  );
}

export default App;
