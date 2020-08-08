import React from "react";

import { Container, Content, Card } from "./styles";

function Main() {
  return (
    <Container>
      <h1>Por favor, escolha uma das opções abaixo:</h1>
      <Content>
        <Card to="/FirstList">Listar clientes com maior valor em compras.</Card>
        <Card to="/SecondList">
          Ver o cliente com maior compra única em 2016.
        </Card>
        <Card to="/ThirdList">Ver os 3 clientes mais fieis.</Card>
        <Card to="FourthList">
          Verificar recomendação de vinho a um cliente.
        </Card>
      </Content>
    </Container>
  );
}

export default Main;
