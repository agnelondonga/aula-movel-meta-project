// OrdersPage.js
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTable } from '../../context/TableContextDef';
import { useCart } from '../../context/CartContextDef';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Container = styled(motion.div)`
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
  color: #343A40;
`;

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;

const TableCard = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const TableId = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  color: #343A40;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Button = styled.button`
  background: ${(props) =>
    props.active
      ? 'linear-gradient(135deg, #FFC107, #E0A800)'
      : 'linear-gradient(135deg, #28A745, #218838)'};
  color: #FFFFFF;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.active
        ? 'linear-gradient(135deg, #E0A800, #C69500)'
        : 'linear-gradient(135deg, #218838, #1E7E34)'};
  }
`;

const FinalizeButton = styled.button`
  background: #DC3545;
  color: #FFFFFF;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #C82333;
  }
`;

const OrderList = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  margin-top: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const OrderItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #E9ECEF;
  &:last-child {
    border-bottom: none;
  }
`;

const OrderDetail = styled.p`
  font-size: 14px;
  color: #6C757D;
`;

const OrderTotal = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #343A40;
`;

const OrderTitle = styled.h4`
  font-size: 16px;
  color: #343A40;
  margin-bottom: 8px;
`;

const ItemDetail = styled.li`
  font-size: 13px;
  color: #495057;
`;

const SummaryTable = styled.table`
  width: 100%;
  margin-top: 40px;
  border-collapse: collapse;
`;

const Th = styled.th`
  border-bottom: 1px solid #dee2e6;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #f1f1f1;
`;

const BoldTd = styled(Td)`
  font-weight: bold;
`;

const FilterSelect = styled.select`
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #CED4DA;
`;

const tables = Array.from({ length: 10 }, (_, i) => i + 1);

function OrdersPage() {
  const { setSelectedTable } = useTable();
  const { orders, setOrders } = useCart();
  const navigate = useNavigate();
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [filter, setFilter] = useState('arrival');

  const handleNewOrder = (tableId) => {
    setSelectedTable({ id: tableId });
    navigate('/sales');
  };

  const handleViewOrders = (tableId) => {
    setSelectedTableId((prev) => (prev === tableId ? null : tableId));
  };

  const handleFinalizeTable = (tableId) => {
    const newOrders = orders.filter((o) => o.tableId !== tableId);
    setOrders(newOrders);
    setSelectedTableId(null);
  };

  const toggleExpanded = (orderId) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (filter === 'mesa') return a.tableId - b.tableId;
    if (filter === 'total') return b.total - a.total;
    return new Date(a.timestamp || a.date || 0) - new Date(b.timestamp || b.date || 0);
  });

  const totalGeral = sortedOrders.reduce((acc, order) => acc + order.total, 0);

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Title>Pedidos - Eva e Filhos</Title>
      <TableGrid>
        {tables.map((tableId) => {
          const tableOrders = orders.filter((o) => o.tableId === tableId);
          const hasOrder = tableOrders.length > 0;

          return (
            <TableCard key={tableId} initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
              <TableId>Mesa {tableId}</TableId>
              <ButtonContainer>
                <Button onClick={() => handleNewOrder(tableId)}>Adicionar Pedido</Button>
                {hasOrder && (
                  <>
                    <Button active onClick={() => handleViewOrders(tableId)}>Ver Pedido</Button>
                    <FinalizeButton onClick={() => handleFinalizeTable(tableId)}>Finalizar Mesa</FinalizeButton>
                  </>
                )}
              </ButtonContainer>
              {selectedTableId === tableId && hasOrder && (
                <OrderList>
                  <OrderTitle>Pedidos da Mesa {tableId}</OrderTitle>
                  {tableOrders.map((order) => (
                    <OrderItem key={order.id}>
                      <OrderDetail>Pedido #{order.id}</OrderDetail>
                      <OrderTotal>Total: {order.total.toFixed(2)} AOA</OrderTotal>
                      <OrderDetail>Itens: {order.items.length}</OrderDetail>
                      <Button onClick={() => toggleExpanded(order.id)}>
                        {expandedOrderId === order.id ? 'Ver Menos' : 'Ver Mais'}
                      </Button>
                      {expandedOrderId === order.id && (
                        <ul>
                          {order.items.map((item, index) => (
                            <ItemDetail key={index}>
                              {item.name} - {item.quantity}x ({item.price.toFixed(2)} AOA)
                            </ItemDetail>
                          ))}
                        </ul>
                      )}
                    </OrderItem>
                  ))}
                </OrderList>
              )}
            </TableCard>
          );
        })}
      </TableGrid>

      <div style={{ marginTop: '48px' }}>
        <h3>Resumo Geral dos Pedidos</h3>
        <FilterSelect onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="arrival">Ordem de Chegada</option>
          <option value="mesa">Por Mesa</option>
          <option value="total">Por Total</option>
        </FilterSelect>
        <SummaryTable>
          <thead>
            <tr>
              <Th>Pedido #</Th>
              <Th>Mesa</Th>
              <Th>Total</Th>
              <Th>Data</Th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order) => (
              <tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.tableId}</Td>
                <Td>{order.total.toFixed(2)} AOA</Td>
                <Td>{
                  order.timestamp || order.date
                    ? new Date(order.timestamp || order.date).toLocaleString('pt-AO')
                    : 'Data inválida'
                }</Td>
              </tr>
            ))}
            <tr>
              <BoldTd colSpan={2}>Total Geral</BoldTd>
              <BoldTd>{totalGeral.toFixed(2)} AOA</BoldTd>
              <Td></Td>
            </tr>
          </tbody>
        </SummaryTable>
      </div>
    </Container>
  );
}

export default OrdersPage;
