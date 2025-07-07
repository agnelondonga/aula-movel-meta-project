import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { CartProvider } from './context/CartContext';
import { TableProvider } from './context/TableContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <TableProvider>
          <GlobalStyle />
          <App />
        </TableProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);