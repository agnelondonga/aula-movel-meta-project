import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaTachometerAlt, FaShoppingCart, FaUtensils, FaFileAlt, FaCog, FaQuestionCircle, FaList } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SidebarContainer = styled(motion.div)`
  width: 180px; /* Increased from 160px to accommodate larger text/icons */
  height: 100vh;
  background: linear-gradient(180deg, #1A3C34 0%, #14332C 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0; /* Increased padding from 8px */
  position: fixed;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 18px; /* Increased from 14px */
  font-weight: 700;
  color: #28A745;
  background: #FFFFFF;
  padding: 10px 14px; /* Increased from 8px 12px */
  border-radius: 6px; /* Slightly increased from 5px */
  margin-bottom: 16px; /* Increased from 12px */
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
  font-size: 16px; /* Increased from 12px */
  text-align: center;
  margin: 6px 0; /* Increased from 4px */
  padding: 8px; /* Increased from 6px */
  width: 140px; /* Increased from 120px */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px; /* Increased from 8px */
  border-radius: 10px; /* Increased from 8px */
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
  left: 170px; /* Increased from 150px to account for wider sidebar */
  background: #1A3C34;
  color: #F8F9FA;
  padding: 6px 10px; /* Increased from 5px 8px */
  border-radius: 6px; /* Increased from 5px */
  font-size: 14px; /* Increased from 12px */
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
      initial={{ x: -180 }} /* Adjusted for new width */
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <NavLink to="/sales">
        <Logo>Eva e Filhos</Logo>
      </NavLink>
      <NavItem to="/dashboard">
        <Icon><FaTachometerAlt size={24} /></Icon> {/* Increased from 18 */}
        Dashboard
        <Tooltip>Dashboard</Tooltip>
      </NavItem>
      <NavItem to="/sales">
        <Icon><FaUtensils size={24} /></Icon>
        Vendas
        <Tooltip>Vendas</Tooltip>
      </NavItem>
      <NavItem to="/orders">
        <Icon><FaList size={24} /></Icon>
        Pedidos
        <Tooltip>Pedidos</Tooltip>
      </NavItem>
      <NavItem to="/products">
        <Icon><FaShoppingCart size={24} /></Icon>
        Produtos
        <Tooltip>Produtos</Tooltip>
      </NavItem>
      <NavItem to="/reports">
        <Icon><FaFileAlt size={24} /></Icon>
        Relatórios
        <Tooltip>Relatórios</Tooltip>
      </NavItem>
      <NavItem to="/settings">
        <Icon><FaCog size={24} /></Icon>
        Configurações
        <Tooltip>Configurações</Tooltip>
      </NavItem>
      <NavItem to="/support">
        <Icon><FaQuestionCircle size={24} /></Icon>
        Suporte
        <Tooltip>Suporte</Tooltip>
      </NavItem>
    </SidebarContainer>
  );
}

export default Sidebar;