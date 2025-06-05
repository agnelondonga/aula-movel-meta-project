import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

const Container = styled(motion.div)`
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;

const ProductCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #6C757D;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #28A745, #218838);
  color: #FFFFFF;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover {
    background: linear-gradient(135deg, #218838, #1E7E34);
  }
`;

const staticProducts = [
  { id: 1, name: 'Funge', price: 500, image: '/src/assets/Muamba_de_galinha.jpg' },
  { id: 2, name: 'Calulu', price: 1200, image: '/src/assets/Mufete.jpeg' },
  { id: 3, name: 'Moamba de Galinha', price: 1500, image: '/src/assets/Muamba_de_galinha.jpg' },
  { id: 4, name: 'Mufete de Peixe', price: 1800, image: '/src/assets/Mufete.jpeg' },
];

function ProductsPage() {
  const [products, setProducts] = useState(staticProducts);

  const addProduct = () => {
    alert('Funcionalidade de adicionar produto ainda será implementada');
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Produtos - Eva e Filhos</Title>
      <Button onClick={addProduct}>
        <FaPlus /> Adicionar Produto
      </Button>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage
              src={product.image}
              alt={product.name}
              onError={(e) => (e.target.src = 'https://via.placeholder.com/200')}
            />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price.toFixed(2)} AOA</ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
}

export default ProductsPage;