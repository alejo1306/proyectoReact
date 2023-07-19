import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../productos/productos.json'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos)
            }, 1000);
        });

        promesa.then((data) => {
            setItem(data)
        })

    }, [id])

    return (
        <div><ItemList item={item} /></div>


    )
}

export default ItemListContainer
