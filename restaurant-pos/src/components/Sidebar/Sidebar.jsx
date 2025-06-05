import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaTachometerAlt, FaShoppingCart, FaUtensils, FaCreditCard, FaFileAlt, FaCashRegister, FaCog, FaQuestionCircle, FaList, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SidebarContainer = styled(motion.div)`
  width: 160px;
  height: 100vh;
  background: linear-gradient(180deg, #1A3C34 0%, #14332C 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  position: fixed;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #28A745;
  background: #FFFFFF;
  padding: 8px 12px;
  border-radius: 5px;
  margin-bottom: 12px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavItem = styled(NavLink)`
  color: #F8F9FA;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: center;
  margin: 4px 0;
  padding: 6px;
  width: 120px; /* Increased from 100px */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &.active {
    background: #28A745;
    color: #FFFFFF;
  }

  &:hover {
    background: rgba(40, 167, 69, 0.2);
    color: #28A745;
  }
`;

const Icon = styled.div`
  transition: transform 0.3s ease;

  ${NavItem}:hover & {
    transform: scale(1.2);
  }
`;

const Tooltip = styled.span`
  position: absolute;
  left: 150px; /* Adjusted from 130px */
  background: #1A3C34;
  color: #F8F9FA;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 10;

  ${NavItem}:hover & {
    opacity: 1;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer
      initial={{ x: -140 }} 
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
 <NavLink to="/sales">
        <Logo>Eva e Filhos</Logo>
      </NavLink>
      <NavItem to="/dashboard">
        <Icon><FaTachometerAlt size={18} /></Icon>
        Dashboard
        <Tooltip>Dashboard</Tooltip>
      </NavItem>
      <NavItem to="/sales">
        <Icon><FaUtensils size={18} /></Icon>
        Vendas
        <Tooltip>Vendas</Tooltip>
      </NavItem>
      <NavItem to="/orders">
        <Icon><FaList size={18} /></Icon>
        Pedidos
        <Tooltip>Pedidos</Tooltip>
      </NavItem>
      <NavItem to="/payment">
        <Icon><FaCreditCard size={18} /></Icon>
        Pagamentos
        <Tooltip>Pagamentos</Tooltip>
      </NavItem>
      <NavItem to="/products">
        <Icon><FaShoppingCart size={18} /></Icon>
        Produtos
        <Tooltip>Produtos</Tooltip>
      </NavItem>
      <NavItem to="/reports">
        <Icon><FaFileAlt size={18} /></Icon>
        Relatórios
        <Tooltip>Relatórios</Tooltip>
      </NavItem>
      <NavItem to="/cash-closure">
        <Icon><FaCashRegister size={18} /></Icon>
        Fecho de Caixa
        <Tooltip>Fecho de Caixa</Tooltip>
      </NavItem>
      <NavItem to="/settings">
        <Icon><FaCog size={18} /></Icon>
        Configurações
        <Tooltip>Configurações</Tooltip>
      </NavItem>
      <NavItem to="/support">
        <Icon><FaQuestionCircle size={18} /></Icon>
        Suporte
        <Tooltip>Suporte</Tooltip>
      </NavItem>
      <NavItem to="/login">
        <Icon><FaSignInAlt size={18} /></Icon>
        Login
        <Tooltip>Entrar</Tooltip>
      </NavItem>
    </SidebarContainer>
  );
}

export default Sidebar;