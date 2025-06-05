import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPrint, FaGlobe, FaUsers } from 'react-icons/fa';

const Container = styled(motion.div)`
  max-width: 600px;
`;

const Option = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #28A745;
  color: #F8F9FA;
  padding: 10px;
  border: none;
  border-radius: 4px;
`;

function SettingsPage() {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Definições</h2>
      <Option>
        <FaPrint />
        <label>Impressora: </label>
        <select>
          <option>Impressora 1</option>
          <option>Impressora 2</option>
        </select>
      </Option>
      <Option>
        <FaGlobe />
        <label>Moeda: </label>
        <select>
          <option>AOA</option>
          <option>USD</option>
        </select>
      </Option>
      <Option>
        <FaGlobe />
        <label>Idioma: </label>
        <select>
          <option>Português</option>
          <option>Inglês</option>
        </select>
      </Option>
      <Option>
        <FaUsers />
        <Button>Gerir Utilizadores</Button>
      </Option>
    </Container>
  );
}

export default SettingsPage;