import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../productos/productos.json'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const { categoria } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoria ? productos.filter(item => item.categoria === categoria) : productos)
            }, 1000);
        });

        promesa.then((data) => {
            setItem(data)
        })

    }, [categoria])

    return (
        <div><ItemList item={item} /></div>


    )
}

export default ItemListContainer
