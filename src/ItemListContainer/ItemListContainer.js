import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const { categoria } = useParams();

    useEffect(() => {
        const querydb = getFirestore()
        const querycollection = collection(querydb, 'productos')
        if (categoria) {
            const queryFilter = query(querycollection, where('categoria', '==', categoria))
            getDocs(queryFilter)
                .then(res => setItem(res.docs.map(p => ({ id: p.id, ...p.data() }))))
        } else {
            getDocs(querycollection)
                .then(res => setItem(res.docs.map(p => ({ id: p.id, ...p.data() }))))
        }

    }, [categoria])

    return (
        <ItemList item={item} />



    )
}

export default ItemListContainer
