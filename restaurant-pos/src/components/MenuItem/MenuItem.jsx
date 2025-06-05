import styled from 'styled-components';
import { useCart } from '../../context/CartContextDef';

const Card = styled.div`
  background-color: #F4F4F9;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  text-align: center;
  color: #1C2526;
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #28A745;
  color: #FFFFFF;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

function MenuItem({ item }) {
  const { addToCart } = useCart();

  return (
    <Card>
      <Image src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price.toFixed(2)} AOA</p>
      <Button onClick={() => addToCart(item)}>Add to Cart</Button>
    </Card>
  );
}

export default MenuItem;