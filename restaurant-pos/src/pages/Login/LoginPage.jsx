import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaFingerprint } from 'react-icons/fa';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #F8F9FA, #E9ECEF);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #28A745;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #1A3C34;
  border-radius: 4px;
  background-color: #F8F9FA;
  color: #1A3C34;
`;

const Button = styled.button`
  background-color: #28A745;
  color: #F8F9FA;
  padding: 10px;
  border: none;
  border-radius: 4px;
`;

const ExtraOptions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tentativa de login com nome de usuário: ${username}`);
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Logo>Eva e Filhos</Logo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <ExtraOptions>
        <FaQrcode size={24} title="Login com QR Code" onClick={() => alert('Login por QR Code não implementado')} />
        <FaFingerprint size={24} title="Login Biométrico" onClick={() => alert('Login biométrico não implementado')} />
      </ExtraOptions>
    </Container>
  );
}

export default LoginPage;
