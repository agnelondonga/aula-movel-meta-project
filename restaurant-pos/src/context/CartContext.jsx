import { useState } from 'react';
import { CartContext } from './CartContextDef';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // { tableId: [{ item, quantity }], 'none': [...] }
  const [orders, setOrders] = useState([]); // [{ tableId, items, status, total }]
  const [tables, setTables] = useState([
    { id: 1, status: 'Available' },
    { id: 2, status: 'Available' },
    { id: 3, status: 'Available' },
  ]);

  const addToCart = (item, tableId) => {
    const key = tableId ?? 'none';
    setCart((prev) => {
      const tableCart = prev[key] || [];
      const existingItem = tableCart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          ...prev,
          [key]: tableCart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...prev,
        [key]: [...tableCart, { ...item, quantity: 1 }],
      };
    });
    if (tableId) {
      setTables((prev) =>
        prev.map((table) =>
          table.id === tableId && table.status === 'Available'
            ? { ...table, status: 'In Service' }
            : table
        )
      );
    }
  };

  const removeFromCart = (itemId, tableId) => {
    const key = tableId ?? 'none';
    setCart((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item.id !== itemId),
    }));
  };

  const getTotal = (tableId) => {
    const key = tableId ?? 'none';
    const tableCart = cart[key] || [];
    return tableCart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const submitOrder = (tableId) => {
    const key = tableId ?? 'none';
    const tableCart = cart[key] || [];
    if (tableCart.length === 0) return;
    setOrders((prev) => [
      ...prev,
      {
        tableId: tableId ?? 'None',
        items: tableCart,
        status: 'To Do',
        total: getTotal(tableId),
        id: Date.now(),
      },
    ]);
    if (tableId) {
      setTables((prev) =>
        prev.map((table) =>
          table.id === tableId ? { ...table, status: 'Order Ready' } : table
        )
      );
    }
    setCart((prev) => ({ ...prev, [key]: [] }));
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
    const order = orders.find((o) => o.id === orderId);
    if (order && order.tableId !== 'None' && status === 'Delivered') {
      setTables((prev) =>
        prev.map((table) =>
          table.id === order.tableId ? { ...table, status: 'Bill Closed' } : table
        )
      );
    }
  };

  const openNewOrder = (tableId) => {
    setCart((prev) => ({ ...prev, [tableId]: [] }));
    setTables((prev) =>
      prev.map((table) =>
        table.id === tableId ? { ...table, status: 'In Service' } : table
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        tables,
        addToCart,
        removeFromCart,
        getTotal,
        submitOrder,
        updateOrderStatus,
        openNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};