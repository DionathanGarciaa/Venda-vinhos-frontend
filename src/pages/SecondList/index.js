/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import image from "../../assets/undraw_winners_ao2o.svg";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { Container, Content, Card } from "./styles";
import { FaSpinner } from "react-icons/fa";

const SecondList = () => {
  const [loading, setLoading] = useState(false);
  const [bestClient, setBestClient] = useState({
    nome: "0",
    valorTotal: "",
  });
  const link = useHistory();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    api.get("bestClient").then((response) => {
      setBestClient(response.data);
      setLoading(false);
    });
  };

  return (
    <Container>
      <h1>E o prêmio de melhor cliente em 2016 vai para:</h1>
      <Content>
        {loading ? (
          <div className="overlay">
            <FaSpinner id="spinner" color="#FFF" size={100} />
          </div>
        ) : (
          <>
            <img src={image} alt="imagem de parabéns" />
            <Card>
              {bestClient.nome && (
                <>
                  <p className="nome">{bestClient.nome} </p>
                  <p>
                    Valor total gasto:
                    {" " +
                      bestClient.valorTotal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </p>
                </>
              )}
            </Card>
          </>
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

export default SecondList;
