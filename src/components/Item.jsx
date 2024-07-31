import { useState } from "react";

const Item = ({id, quantity, packed, description, onDeleteItem, onCheckItem}) => {

    return (
        <li>
            <input type="checkbox" value={packed} onChange={() => onCheckItem(id)}/>
            <span style={packed ? {textDecoration: 'line-through'} : null}>{quantity} {description}</span>
            <button onClick={() => onDeleteItem(id)}>❌</button>
        </li>
    )
}

export default Item;