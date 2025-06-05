import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTable } from '../../context/TableContextDef';
import { useCart } from '../../context/CartContextDef';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`;

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;

const TableCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const TableId = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Status = styled.div`
  font-size: 14px;
  padding: 8px;
  border-radius: 8px;
  color: #FFFFFF;
  background-color: ${(props) => {
    switch (props.status) {
      case 'Disponível':
        return '#28A745';
      case 'Em Atendimento':
        return '#007BFF';
      case 'Pedido Pronto':
        return '#FFC107';
      case 'Conta Encerrada':
        return '#6C757D';
      default:
        return '#6C757D';
    }
  }};
`;

const Button = styled.button`
  background: linear-gradient(135deg, #28A745, #218838);
  color: #FFFFFF;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-top: 12px;
  width: 100%;
  font-size: 14px;
  &:hover {
    background: linear-gradient(135deg, #218838, #1E7E34);
  }
`;

const tables = [
  { id: 1, status: 'Disponível' },
  { id: 2, status: 'Em Atendimento' },
  { id: 3, status: 'Pedido Pronto' },
  { id: 4, status: 'Conta Encerrada' },
  { id: 5, status: 'Disponível' },
  { id: 6, status: 'Em Atendimento' },
  { id: 7, status: 'Pedido Pronto' },
  { id: 8, status: 'Conta Encerrada' },
  { id: 9, status: 'Disponível' },
  { id: 10, status: 'Em Atendimento' },
];

function OrdersPage() {
  const { setSelectedTable } = useTable();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleTableClick = (table) => {
    setSelectedTable(table);
    const tableCart = cart[table.id] || [];
    if (tableCart.length > 0) {
      navigate('/sales');
    } else {
      navigate('/sales');
    }
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Pedidos - Eva e Filhos</Title>
      <TableGrid>
        {tables.map((table) => (
          <TableCard key={table.id} onClick={() => handleTableClick(table)}>
            <TableId>Mesa {table.id}</TableId>
            <Status status={table.status}>{table.status}</Status>
            <Button>
              {cart[table.id]?.length > 0 ? 'Continuar Pedido' : 'Novo Pedido'}
            </Button>
          </TableCard>
        ))}
      </TableGrid>
    </Container>
  );
}

export default OrdersPage;
