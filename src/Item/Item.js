import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item }) {
    return (
        <div className='container'>
            <div className='card border border-0'>
                <img src={item.imagen} alt={item.nombre} />
                <h2>{item.nombre}</h2>
                <h3>{item.marca}</h3>
                <Link to={"/item/" + item.id} className='text-decoration-none'>
                    <button className="detail-button detalle">Detalle</button>
                </Link>
            </div>
        </div>
    );
}

export default Item;
