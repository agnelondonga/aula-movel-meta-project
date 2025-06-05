import styled from 'styled-components';
import TableCard from '../../components/TableCard/TableCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 20px;
`;

const tables = [
  { id: 1, status: 'Ocupado' },
  { id: 2, status: 'Livre' },
  { id: 3, status: 'Reservado' },
];

function TablesPage() {
  return (
    <div>
      <h2>Tables - Eva e Filhos</h2>
      <Container>
        {tables.map((table) => (
          <TableCard key={table.id} table={table} />
        ))}
      </Container>
    </div>
  );
}

export default TablesPage;