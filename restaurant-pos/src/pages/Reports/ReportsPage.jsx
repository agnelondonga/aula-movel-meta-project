// ReportsPage.js
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  LineChart, Line
} from 'recharts';
import { useState } from 'react';

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

const FilterRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #CED4DA;
`;

const COLORS = ['#28A745', '#007BFF', '#FFC107', '#DC3545', '#17A2B8', '#6F42C1', '#6610f2', '#20c997', '#fd7e14', '#e83e8c'];

const mockSalesData = {
  daily: [
    { name: '08h', revenue: 2000 }, { name: '10h', revenue: 4500 },
    { name: '12h', revenue: 12000 }, { name: '14h', revenue: 10000 },
    { name: '18h', revenue: 7000 }, { name: '20h', revenue: 5000 }
  ],
  weekly: [
    { name: 'Seg', revenue: 15000 }, { name: 'Ter', revenue: 18000 },
    { name: 'Qua', revenue: 22000 }, { name: 'Qui', revenue: 20000 },
    { name: 'Sex', revenue: 25000 }, { name: 'Sáb', revenue: 27000 },
    { name: 'Dom', revenue: 21000 }
  ],
  monthly: [
    { name: 'Jan', revenue: 40000 }, { name: 'Fev', revenue: 42000 },
    { name: 'Mar', revenue: 48000 }, { name: 'Abr', revenue: 46000 },
    { name: 'Mai', revenue: 50000 }, { name: 'Jun', revenue: 52000 }
  ]
};

const mockItemData = {
  todos: [
    { name: 'Moamba', value: 110 }, { name: 'Mufete', value: 98 },
    { name: 'Blue', value: 95 }, { name: 'Funge', value: 91 },
    { name: 'Água', value: 87 }, { name: 'Bitoque', value: 80 },
    { name: 'Peixe', value: 75 }, { name: 'Kizaca', value: 72 },
    { name: 'Frango', value: 69 }, { name: 'Marisco', value: 65 }
  ],
  principais: [
    { name: 'Moamba', value: 110 }, { name: 'Mufete', value: 98 },
    { name: 'Funge', value: 91 }, { name: 'Bitoque', value: 80 },
    { name: 'Peixe', value: 75 }, { name: 'Kizaca', value: 72 },
    { name: 'Frango', value: 69 }
  ],
  acompanhamentos: [
    { name: 'Kizaca', value: 72 }, { name: 'Frango', value: 69 },
    { name: 'Marisco', value: 65 }
  ],
  bebidas: [
    { name: 'Blue', value: 95 }, { name: 'Água', value: 87 }
  ]
};

function ReportsPage() {
  const [period, setPeriod] = useState('daily');
  const [category, setCategory] = useState('todos');

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Relatórios - Eva e Filhos</Title>

      <ChartCard>
        <h3>Receita ({period === 'daily' ? 'Horária' : period === 'weekly' ? 'Semanal' : 'Mensal'})</h3>
        <FilterRow>
          <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="daily">Diário</option>
            <option value="weekly">Semanal</option>
            <option value="monthly">Mensal</option>
          </Select>
        </FilterRow>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockSalesData[period]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#28A745" name="Receita" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard>
        <h3>Evolução da Receita ({period})</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockSalesData[period]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#007BFF" name="Receita" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard>
        <h3>Mais Pedidos ({category})</h3>
        <FilterRow>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="principais">Prato Principal</option>
            <option value="acompanhamentos">Acompanhamento</option>
            <option value="bebidas">Bebidas</option>
          </Select>
        </FilterRow>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={mockItemData[category]}
              cx="50%"
              cy="50%"
              outerRadius={110}
              dataKey="value"
              label
            >
              {mockItemData[category].map((entry, index) => (
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
