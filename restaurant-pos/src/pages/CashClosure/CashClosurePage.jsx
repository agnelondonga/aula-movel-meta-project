import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Container = styled(motion.div)`
  max-width: 600px;
`;

const Summary = styled.div`
  background-color: #E9ECEF;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #1A3C34;
`;

const Button = styled.button`
  background-color: #28A745;
  color: #F8F9FA;
  padding: 10px;
  border: none;
  border-radius: 4px;
  width: 100%;
`;

function CashClosurePage() {
  const [cashAmount, setCashAmount] = useState('');
  const [discrepancy, setDiscrepancy] = useState('');

  const handleSubmit = () => {
    alert(`Fechamento de Caixa: ${cashAmount} AOA, Discrepância: ${discrepancy}`);
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Fechamento de Caixa</h2>
      <Summary>
        <h3>Relatório</h3>
        <p>Total de Vendas: 12,500 AOA</p>
        <p>Expectativa de lucro: 10,000 AOA</p>
        <p>Pagamentos com Cartão: 2,500 AOA</p>
      </Summary>
      <Input
        type="número"
        placeholder="Insira o valor real em dinheiro"
        value={cashAmount}
        onChange={(e) => setCashAmount(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Justificativa da discrepância (se houver)"
        value={discrepancy}
        onChange={(e) => setDiscrepancy(e.target.value)}
      />
      <Button onClick={handleSubmit}><FaCheck /> Confirm Closure</Button>
    </Container>
  );
}

export default CashClosurePage;