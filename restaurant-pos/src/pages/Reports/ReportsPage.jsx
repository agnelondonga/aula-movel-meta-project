import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Container = styled(motion.div)`
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`;

const ChartCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

const salesData = [
  { name: 'Seg', revenue: 15000 },
  { name: 'Ter', revenue: 18000 },
  { name: 'Qua', revenue: 22000 },
  { name: 'Qui', revenue: 20000 },
  { name: 'Sex', revenue: 25000 },
];

const categoryData = [
  { name: 'Prato Principal', value: 60 },
  { name: 'Acompanhamento', value: 25 },
  { name: 'Lanche', value: 15 },
];

const COLORS = ['#28A745', '#007BFF', '#FFC107'];

function ReportsPage() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Relatórios - Eva e Filhos</Title>
      <ChartCard>
        <h3>Receita Diária</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#28A745" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <ChartCard>
        <h3>Vendas por Categoria</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </Container>
  );
}

export default ReportsPage;