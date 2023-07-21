import React from 'react'
import Item from '../Item/Item'


const itemList = ({ item }) => {
    return (
        <div className='row'>
            {item.map(i =>
                <div className='col-md-3'
                    key={i.id}>
                    <Item item={i} />
                </div>
            )
            }
        </div>
    )
}


export default itemList
