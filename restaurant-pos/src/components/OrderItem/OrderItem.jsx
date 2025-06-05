import styled from 'styled-components';
import { useCart } from '../../context/CartContextDef';

const OrderContainer = styled.div`
  background-color: #E9ECEF;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #28A745;
  color: #F8F9FA;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
`;

function OrderItem({ order }) {
  const { updateOrderStatus } = useCart();

  return (
    <OrderContainer>
      <h3>Table {order.tableId} - Status: {order.status}</h3>
      {order.items.map((item) => (
        <Item key={item.id}>
          <span>{item.name} x {item.quantity}</span>
          <span>{(item.price * item.quantity).toFixed(2)} AOA</span>
        </Item>
      ))}
      <p>Total: {order.total.toFixed(2)} AOA</p>
      <Button onClick={() => updateOrderStatus(order.id, 'To Do')}>Set To Do</Button>
      <Button onClick={() => updateOrderStatus(order.id, 'Done')}>Set Done</Button>
      <Button onClick={() => updateOrderStatus(order.id, 'Delivered')}>Set Delivered</Button>
    </OrderContainer>
  );
}

export default OrderItem;