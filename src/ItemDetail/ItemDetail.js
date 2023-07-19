import React from 'react'
import ItemCount from '../itemCount/Itemcount'
const ItemDetail = (item) => {
    return (
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <img src={item.imagen} className='img-fluid' alt='item.nombre' />
                <h2>{item.nombre}</h2>
                <p>{item.marca}</p>
                <p>$ {item.precio}</p>
            </div>
            <div>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail
