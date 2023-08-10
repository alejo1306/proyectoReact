import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';

function Product({ item }) {
    const { cart, setCart } = useCart();
    const [count, setCount] = useState(0);

    const addToCart = () => {
        if (count > 0) {
            const existingItemIndex = cart.findIndex(itemInCart => itemInCart.id === item.id);
            if (existingItemIndex !== -1) {
                const updatedCart = [...cart];
                updatedCart[existingItemIndex].quantity += count;
                setCart(updatedCart);
            } else {
                const newItem = { ...item, quantity: count };
                setCart([...cart, newItem]);
            }
            setCount(0);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h2>{item.nombre}</h2>
            <p>Price: ${item.precio}</p>
            <div>
                <img src={item.imagen} alt={item.nombre} />
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <button onClick={addToCart}>Agregar al Carrito</button>
        </div>
    );
}

export default Product;



