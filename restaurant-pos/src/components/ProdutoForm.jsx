import React, { useState } from "react";
import api from "../api";

const ProdutoForm = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [dataExpiracao, setDataExpiracao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const produto = {
        nome,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade),
        dataExpiracao
      };
      console.table(produto)
      await api.post("/produtos", produto);
      alert("Produto adicionado com sucesso!");
      setNome("");
      setPreco("");
      setQuantidade("");
      setDataExpiracao("");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Produto</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <input
        type="date"
        value={dataExpiracao}
        onChange={(e) => setDataExpiracao(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ProdutoForm;
