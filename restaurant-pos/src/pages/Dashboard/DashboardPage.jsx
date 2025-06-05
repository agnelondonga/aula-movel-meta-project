import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaShoppingCart, FaUtensils } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled(motion.div)`
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatIcon = styled.div`
  background: linear-gradient(135deg, #28A745, #218838);
  padding: 12px;
  border-radius: 8px;
  color: #FFFFFF;
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const ChartContainer = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const staticData = [
  { name: 'Seg', sales: 15000 }, 
  { name: 'Ter', sales: 18000 }, 
  { name: 'Qua', sales: 22000 }, 
  { name: 'Qui', sales: 20000 }, 
  { name: 'Sex', sales: 25000 }, 
];

function DashboardPage() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Painel - Eva e Filhos</Title>
      <StatsGrid>
        <StatCard>
          <StatIcon><FaMoneyBillWave size={24} /></StatIcon>
          <StatInfo>
            <StatTitle>Total de Vendas</StatTitle>
            <StatValue>100.000 AOA</StatValue> {/* Adjusted formatting for consistency */}
          </StatInfo>
        </StatCard>
        <StatCard>
          <StatIcon><FaShoppingCart size={24} /></StatIcon>
          <StatInfo>
            <StatTitle>Pedidos de Hoje</StatTitle>
            <StatValue>45</StatValue>
          </StatInfo>
        </StatCard>
        <StatCard>
          <StatIcon><FaUtensils size={24} /></StatIcon>
          <StatInfo>
            <StatTitle>Item mais Vendido</StatTitle>
            <StatValue>Moamba de Galinha</StatValue>
          </StatInfo>
        </StatCard>
      </StatsGrid>
      <ChartContainer>
        <h3>Vendas Semanais</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={staticData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#28A745" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
}

export default DashboardPage;