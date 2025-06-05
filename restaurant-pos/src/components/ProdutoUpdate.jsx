import React, { useState } from 'react';
import api from '../api';

const ProdutoUpdate = () => {
  const [produtoId, setProdutoId] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [dataExpiracao, setDataExpiracao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/produtos/${produtoId}`, {
        nome,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade),
        dataExpiracao,
      });
      alert('Produto atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Atualizar Produto</h2>
      <input
        type="number"
        placeholder="ID do Produto"
        value={produtoId}
        onChange={(e) => setProdutoId(e.target.value)}
      />
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
      <button type="submit">Atualizar</button>
    </form>
  );
};

export default ProdutoUpdate;