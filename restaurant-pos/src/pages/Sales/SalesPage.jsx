import styled from 'styled-components';
import { useState } from 'react';
import { useCart } from '../../context/CartContextDef';
import { useTable } from '../../context/TableContextDef';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import muamba from '../../assets/Muamba_de_galinha.jpg';
import mufete from '../../assets/Mufete.jpeg';
import bitoque from '../../assets/bitoque.jpg';
import fungeCalulu from '../../assets/funge_calulu.jpg';
import kizaca from '../../assets/kizaca.jpeg';
import grelhado from '../../assets/grelhado.jpeg';
import marisco from '../../assets/marisco.jpeg';
import peixe from '../../assets/peixe.jpg';
import pura from '../../assets/pura.jpeg';
import blue from '../../assets/refrigerantes_blue.jpg';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const LeftPanel = styled(motion.div)`
  flex: 1;
`;

const RightPanel = styled(motion.div)`
  width: 350px;
  background: #FFFFFF;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Message = styled.div`
  background: #FFF3CD;
  color: #856404;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid #FFEEBA;
  font-size: 14px;
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #F8F9FA;
  border-radius: 8px;
`;

const TableInfo = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
  color: #6C757D;
`;

const Catalog = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  background: #F8F9FA;
  font-size: 14px;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #28A745, #218838);
  color: #FFFFFF;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-left: 12px;
  font-size: 14px;
  &:hover {
    background: linear-gradient(135deg, #218838, #1E7E34);
  }
`;

const QuantityButton = styled.button`
  background: #E9ECEF;
  color: #343A40;
  padding: 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #D1D5DB;
  }
`;

const Total = styled.div`
  margin: 24px 0;
  font-size: 18px;
  font-weight: 600;
`;

const QuantityInput = styled.input`
  width: 50px;
  padding: 4px;
  border: 1px solid #E9ECEF;
  border-radius: 4px;
  text-align: center;
`;

const menuItems = [
  { id: 1, name: 'Moamba de Galinha', price: 3500, image: muamba, category: 'Principal', stock: 20 },
  { id: 2, name: 'Mufete de Peixe', price: 5000, image: mufete, category: 'Principal', stock: 20 },
  { id: 3, name: 'Bitoque', price: 4000, image: bitoque, category: 'Principal', stock: 20 },
  { id: 4, name: 'Funge com Calulu', price: 3000, image: fungeCalulu, category: 'Principal', stock: 20 },
  { id: 5, name: 'Kizaca', price: 3200, image: kizaca, category: 'Principal', stock: 20 },
  { id: 6, name: 'Frango Grelhado', price: 2800, image: grelhado, category: 'Acompanhamento', stock: 20 },
  { id: 7, name: 'Marisco', price: 4500, image: marisco, category: 'Acompanhamento', stock: 15 },
  { id: 8, name: 'Peixe', price: 2000, image: peixe, category: 'Acompanhamento', stock: 15 },
  { id: 9, name: 'Água Pura', price: 500, image: pura, category: 'Bebida', stock: 30 },
  { id: 10, name: 'Blue', price: 800, image: blue, category: 'Bebida', stock: 30 },
];

function SalesPage() {
  const { cart, addToCart, removeFromCart, getTotal, submitOrder, updateQuantity } = useCart();
  const { selectedTable } = useTable();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');
  const [errorMessage, setErrorMessage] = useState('');

  const tableId = selectedTable ? selectedTable.id : null;
  const tableCart = cart[tableId ?? 'none'] || [];
  const tableDisplay = selectedTable ? `Mesa ${selectedTable.tableNumber || selectedTable.id}` : 'Nenhuma';
  const tableStatus = selectedTable ? selectedTable.status : 'Nenhum';

  const filteredItems = menuItems.filter(
    (item) =>
      (category === 'Todas' || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (item) => {
    const currentItem = tableCart.find((i) => i.id === item.id);
    const currentQty = currentItem?.quantity || 0;
    if (currentQty + 1 > item.stock) {
      setErrorMessage('Não há estoque suficiente para este produto.');
      return;
    }
    addToCart(item, tableId);
  };

  const handleQuantityChange = (itemId, value) => {
    const item = menuItems.find((i) => i.id === itemId);
    const quantity = Math.max(1, parseInt(value) || 1);
    if (quantity > item.stock) {
      setErrorMessage('Quantidade excede o estoque disponível.');
      return;
    }
    updateQuantity(itemId, tableId, quantity);
  };

  const handleIncrement = (itemId) => {
    const item = menuItems.find((i) => i.id === itemId);
    const currentItem = tableCart.find((item) => item.id === itemId);
    if (currentItem.quantity + 1 > item.stock) {
      setErrorMessage('Estoque insuficiente.');
      return;
    }
    updateQuantity(itemId, tableId, currentItem.quantity + 1);
  };

  const handleDecrement = (itemId) => {
    const currentItem = tableCart.find((item) => item.id === itemId);
    if (currentItem && currentItem.quantity > 1) {
      updateQuantity(itemId, tableId, currentItem.quantity - 1);
    }
  };

  const handleSubmitOrder = () => {
    if (!tableId || tableCart.length === 0) {
      setErrorMessage('Selecione uma mesa e adicione itens ao carrinho.');
      return;
    }
    submitOrder(tableId);
    navigate('/orders');
  };

  return (
    <Container>
      <LeftPanel initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.3 }}>
        <SearchBar>
          <Input
            type="text"
            placeholder="Pesquisar por nome ou código"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button><FaSearch /></Button>
        </SearchBar>
        <select
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginBottom: '24px', padding: '12px', borderRadius: '8px', border: '1px solid #E9ECEF' }}
        >
          <option value="Todas">Todas as Categorias</option>
          <option value="Principal">Principal</option>
          <option value="Acompanhamento">Acompanhamento</option>
          <option value="Lanche">Lanche</option>
          <option value="Bebida">Bebida</option>
        </select>
        <Catalog>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleAddToCart(item)}
              className="card"
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/200')}
              />
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>{item.name}</h3>
              <p style={{ fontSize: '14px', color: '#6C757D' }}>{item.price.toFixed(2)} AOA</p>
            </div>
          ))}
        </Catalog>
      </LeftPanel>

      <RightPanel initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.3 }}>
        <h2>Venda - {tableDisplay}</h2>
        {errorMessage && <Message>{errorMessage}</Message>}
        <TableInfo>
          <p><strong>ID da Mesa:</strong> {tableDisplay}</p>
          <p><strong>Estado:</strong> {tableStatus}</p>
        </TableInfo>
        <OrderList>
          {tableCart.map((item) => (
            <OrderItem key={item.id}>
              <span>{item.name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <QuantityButton onClick={() => handleDecrement(item.id)}>
                  <FaMinus />
                </QuantityButton>
                <QuantityInput
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                />
                <QuantityButton onClick={() => handleIncrement(item.id)}>
                  <FaPlus />
                </QuantityButton>
              </div>
              <span>{(item.price * item.quantity).toFixed(2)} AOA</span>
              <FaTrash
                onClick={() => removeFromCart(item.id, tableId)}
                style={{ cursor: 'pointer', color: '#FF6B6B' }}
              />
            </OrderItem>
          ))}
        </OrderList>
        <Total>Total: {getTotal(tableId).toFixed(2)} AOA</Total>
        <Button onClick={handleSubmitOrder}>Submeter Pedido</Button>
      </RightPanel>
    </Container>
  );
}

export default SalesPage;
