import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // In functions ko Context mein add karna hoga

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '40px' }}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty!</p> : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '10px' }}>
              <img src={item.img} width="50" alt="" />
              <span>{item.name}</span>
              <span>Rs. {item.price} x {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: Rs. {total}</h3>
          <button style={{ background: 'green', color: 'white', padding: '10px 20px' }}>Checkout Now</button>
        </div>
      )}
    </div>
  );
}

export default  Cart;