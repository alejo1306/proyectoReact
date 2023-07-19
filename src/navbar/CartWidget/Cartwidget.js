import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Cartwidget = () => {
    return (
        <div className='icono'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>4</span>
        </div>
    )
}

export default Cartwidget



