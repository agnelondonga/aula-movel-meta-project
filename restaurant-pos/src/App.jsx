import React from 'react';
import ProdutoList from './components/ProdutoList.jsx';
import ProdutoForm from './components/ProdutoForm.jsx';
import ProdutoUpdate from './components/ProdutoUpdate.jsx';

function App() {
  return (
    <div>
      <h1>Gerenciamento de Produtos</h1>
      <ProdutoForm />
      <ProdutoUpdate />
      <ProdutoList />
    </div>
  );
}

export default App;