import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import Swal from 'sweetalert2';


function CartPage() {
    const { cart, setCart } = useCart();
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: ''
    });



    const uniqueCart = cart.reduce((unique, item) => {
        const existingItemIndex = unique.findIndex(existingItem => existingItem.id === item.id);
        if (existingItemIndex === -1) {
            unique.push(item);
        } else {
            unique[existingItemIndex].quantity += item.quantity;
        }
        return unique;
    }, []);

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        Swal.fire({
            icon: 'success',
            title: 'Compra realizada exitosamente',
            text: '¡Gracias por tu compra!',
            showConfirmButton: false,
            timer: 2000
        });


        setCart([]);
        setShowCheckoutForm(false);
    };

    return (
        <div className='container card'>
            <h2>Carrito de Compras</h2>
            {uniqueCart.map(item => (
                <div key={item.id}>
                    <img src={item.imagen} alt={item.nombre} />
                    <h3>{item.marca}</h3>
                    <p>{item.nombre}</p>
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Quitar del Carrito</button>
                </div>
            ))}
            {cart.length > 0 ? (
                <>
                    <button onClick={() => setShowCheckoutForm(true)}>Realizar Checkout</button>
                    <p>Total: ${uniqueCart.reduce((total, item) => total + item.precio * item.quantity, 0)}</p>
                    {showCheckoutForm && (
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                placeholder="Nombre"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                placeholder="Correo electrónico"
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleFormChange}
                                placeholder="Dirección"
                                required
                            />
                            <button type="submit">Completar Compra</button>
                        </form>
                    )}
                </>
            ) : (
                <p>El carrito está vacío</p>
            )}
        </div>
    );
}

export default CartPage;


