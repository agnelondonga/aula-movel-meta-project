import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuestionCircle, FaVideo, FaEnvelope } from 'react-icons/fa';

const Container = styled(motion.div)`
  max-width: 600px;
`;

const Section = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #28A745;
  color: #F8F9FA;
  padding: 10px;
  border: none;
  border-radius: 4px;
`;

function SupportPage() {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Suporte</h2>
      <Section>
        <h3><FaQuestionCircle /> Perguntas Frequentes</h3>
        <p>P: Como adicionar um novo produto?</p>
        <p>R: Vá para a página de Produtos e use o formulário.</p>
      </Section>
      <Section>
        <h3><FaVideo /> Tutoriais</h3>
        <p>Assista: Começando com o POS Eva e Filhos</p>
      </Section>
      <Section>
        <h3><FaEnvelope /> Contactar Suporte</h3>
        <Button>Contactar via Email</Button>
      </Section>
    </Container>
  );
}

export default SupportPage;