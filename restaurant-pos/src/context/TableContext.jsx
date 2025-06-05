import { useState } from 'react';
import { TableContext } from './TableContextDef';

export const TableProvider = ({ children }) => {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <TableContext.Provider value={{ selectedTable, setSelectedTable }}>
      {children}
    </TableContext.Provider>
  );
};