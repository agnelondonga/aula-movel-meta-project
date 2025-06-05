import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaCreditCard, FaQrcode } from 'react-icons/fa';

const Container = styled(motion.div)`
  max-width: 700px;
  padding: 24px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`;

const Card = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #E9ECEF;
`;

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 24px;
`;

const MethodButton = styled.button`
  background: linear-gradient(135deg, #28A745, #218838);
  color: #FFFFFF;
  padding: 16px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  &:hover {
    background: linear-gradient(135deg, #218838, #1E7E34);
  }
`;

const Input = styled.input`
  padding: 12px;
  margin: 16px 0;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #E9ECEF;
  background: #F8F9FA;
  font-size: 14px;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #28A745, #218838);
  color: #FFFFFF;
  padding: 16px;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  margin-top: 16px;
  &:hover {
    background: linear-gradient(135deg, #218838, #1E7E34);
  }
`;

const TableInfo = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
  color: #6C757D;
`;

function PaymentPage() {
  const { state } = useLocation();
  const { tableId, tableCart = [], total = 0 } = state || {};
  const tableDisplay = tableId ? `Mesa ${tableId}` : 'Nenhuma';

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Pagamento - {tableDisplay}</Title>
      <Card>
        <TableInfo>
          <p><strong>ID da Mesa:</strong> {tableDisplay}</p>
        </TableInfo>
        <h3>Resumo do Pedido</h3>
        {tableCart.length === 0 ? (
          <p>Sem itens no pedido</p>
        ) : (
          <>
            {tableCart.map((item) => (
              <CartItem key={item.id}>
                <span>{item.name} x {item.quantity}</span>
                <span>{(item.price * item.quantity).toFixed(2)} AOA</span>
              </CartItem>
            ))}
            <h4>Total: {total.toFixed(2)} AOA</h4>
          </>
        )}
      </Card>
      <Card>
        <h3>Métodos de Pagamento</h3>
        <PaymentMethods>
          <MethodButton onClick={() => alert('Pagamento em dinheiro selecionado')}>
            <FaMoneyBillWave /> Dinheiro
          </MethodButton>
          <MethodButton onClick={() => alert('Pagamento com cartão selecionado')}>
            <FaCreditCard /> Cartão
          </MethodButton>
          <MethodButton onClick={() => alert('Pagamento via PIX selecionado')}>
            <FaQrcode /> PIX
          </MethodButton>
        </PaymentMethods>
        <Input type="number" placeholder="Digite o valor em dinheiro (se aplicável)" />
        <Button onClick={() => alert('Recibo enviado para o e-mail')}>
          Concluir Pagamento
        </Button>
      </Card>
    </Container>
  );
}

export default PaymentPage;