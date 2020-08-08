import React from "react";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { Container, Content, Card } from "./styles";

const ThirdList = () => {
  const [bestClients, setBestClients] = useState([]);
  const link = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    api.get("bestClients").then((response) => {
      setBestClients(response.data);
      setLoading(false);
    });
  };
  return (
    <Container>
      <h1>Nossos fiéis escudeiros:</h1>
      <Content>
        {loading ? (
          <div className="overlay">
            <FaSpinner id="spinner" color="#FFF" size={100} />
          </div>
        ) : (
          bestClients.map(
            (client, index) =>
              index < 3 && (
                <Card>
                  <p>{client.nome}</p>
                  <p>Total de compras: {client.totalCompras}</p>
                </Card>
              )
          )
        )}
      </Content>
      <button
        onClick={(e) => {
          e.preventDefault();
          link.push("/");
        }}
      >
        Voltar
      </button>
    </Container>
  );
};

export default ThirdList;
