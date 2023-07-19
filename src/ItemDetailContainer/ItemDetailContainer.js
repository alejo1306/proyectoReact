import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../productos/productos.json'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)))
            }, 3000);
        });

        promesa.then((data) => {
            setItem(data)
        })

    }, [id])

    return (
        <div className='container'>
            <ItemDetail />
        </div>
    )
}


export default ItemDetailContainer
