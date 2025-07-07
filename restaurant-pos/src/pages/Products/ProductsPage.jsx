import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTrash, FaCheck, FaTimes, FaEdit } from 'react-icons/fa';
import muamba from '../../assets/Muamba_de_galinha.jpg';
import mufete from '../../assets/Mufete.jpeg';
import bitoque from '../../assets/bitoque.jpg'; 
import fungeCalulu from '../../assets/funge_calulu.jpg'; 
import kizaca from '../../assets/kizaca.jpeg'; 
import grelhado from '../../assets/grelhado.jpeg'; 
import marisco from '../../assets/marisco.jpeg'; 
import peixe from '../../assets/peixe.jpg';
import pura from '../../assets/pura.jpeg'; 
import blue from '../../assets/refrigerantes_blue.jpg';

const staticProducts = [
  { id: 1, name: 'Moamba de Galinha', price: 3500, quantity: 20, image: muamba },
  { id: 2, name: 'Mufete de Peixe', price: 5000, quantity: 20, image: mufete },
  { id: 3, name: 'Bitoque', price: 4000, quantity: 20, image: bitoque },
  { id: 4, name: 'Funge com Calulu', price: 3000, quantity: 20, image: fungeCalulu },
  { id: 5, name: 'Kizaca', price: 3200, quantity: 20, image: kizaca },
  { id: 6, name: 'Frango Grelhado', price: 2800, quantity: 20, image: grelhado },
  { id: 7, name: 'Marisco', price: 4500, quantity: 15, image: marisco },
  { id: 8, name: 'Peixe', price: 2000, quantity: 15, image: peixe },
  { id: 9, name: 'Água Pura', price: 500, quantity: 30, image: pura },
  { id: 10, name: 'Blue', price: 800, quantity: 30, image: blue },
];

const Container = styled(motion.div)`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`;
const Form = styled.form`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
const Input = styled.input`
  padding: 12px;
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  background: #F8F9FA;
  font-size: 14px;
`;
const FileInput = styled.input`
  padding: 12px;
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  background: #F8F9FA;
  font-size: 14px;
`;
const SubmitButton = styled.button`
  background: linear-gradient(135deg, #28A745, #218838);
  color: #FFFFFF;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  grid-column: span 2;
  &:hover {
    background: linear-gradient(135deg, #218838, #1E7E34);
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;
`;
const Th = styled.th`
  padding: 16px;
  background: #F1F3F5;
  text-align: left;
  border-bottom: 1px solid #DEE2E6;
`;
const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #E9ECEF;
`;
const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;
const ActionButton = styled.button`
  background: ${(props) => (
    props.confirm ? '#28A745' :
    props.cancel ? '#6C757D' :
    props.edit ? '#FFC107' :
    '#DC3545'
  )};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  margin-right: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
`;
const EditableInput = styled.input`
  width: 100px;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

function ProductsPage() {
  const [products, setProducts] = useState(staticProducts);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editPrice, setEditPrice] = useState('');
  const [editQty, setEditQty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      image: image ? URL.createObjectURL(image) : 'https://via.placeholder.com/200',
    };
    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
    setQuantity('');
    setImage(null);
  };

  const startEdit = (product) => {
    setEditId(product.id);
    setEditPrice(product.price);
    setEditQty(product.quantity);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditPrice('');
    setEditQty('');
  };

  const confirmEdit = () => {
    setProducts(products.map(p => p.id === editId ? { ...p, price: parseFloat(editPrice), quantity: parseInt(editQty) } : p));
    cancelEdit();
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Title>Adicionar Novo Produto</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome do Produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <FileInput
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <SubmitButton type="submit">
          <FaPlus /> Adicionar Produto
        </SubmitButton>
      </Form>

      <Title>Lista de Produtos</Title>
      <Table>
        <thead>
          <tr>
            <Th>Imagem</Th>
            <Th>Nome</Th>
            <Th>Preço</Th>
            <Th>Quantidade</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <Td><ProductImage src={p.image} alt={p.name} /></Td>
              <Td>{p.name}</Td>
              <Td>
                {editId === p.id ? (
                  <EditableInput type="number" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                ) : (
                  `${p.price.toFixed(2)} AOA`
                )}
              </Td>
              <Td>
                {editId === p.id ? (
                  <EditableInput type="number" value={editQty} onChange={(e) => setEditQty(e.target.value)} />
                ) : (
                  p.quantity
                )}
              </Td>
              <Td>
                {editId === p.id ? (
                  <>
                    <ActionButton confirm onClick={confirmEdit}><FaCheck /></ActionButton>
                    <ActionButton cancel onClick={cancelEdit}><FaTimes /></ActionButton>
                  </>
                ) : (
                  <>
                    <ActionButton edit onClick={() => startEdit(p)}><FaEdit /> Editar</ActionButton>
                    <ActionButton onClick={() => deleteProduct(p.id)}><FaTrash /></ActionButton>
                  </>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductsPage;