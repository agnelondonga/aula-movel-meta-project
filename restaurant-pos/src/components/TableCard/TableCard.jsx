import styled from 'styled-components';
import { useTable } from '../../context/TableContextDef';

const Card = styled.div`
  background-color: ${(props) => (props.isSelected ? '#28A745' : '#E9ECEF')};
  border-radius: 8px;
  padding: 10px;
  width: 150px;
  text-align: center;
  cursor: pointer;
  color: #1A3C34;
`;

function TableCard({ table }) {
  const { selectedTable, setSelectedTable } = useTable();

  return (
    <Card
      isSelected={selectedTable?.id === table.id}
      onClick={() => setSelectedTable(table)}
    >
      <h3>Table {table.id}</h3>
      <p>{table.status}</p>
    </Card>
  );
}

export default TableCard;