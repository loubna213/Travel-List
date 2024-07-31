import { useState } from "react";
import Item from "./Item";


const PackingList = ({itemsList, onDeleteItem, onCheckItem, onClearList}) => {
    const [sortBy, setSortBy] = useState('input')

    let sortedItems;

    if(sortBy === 'input') sortedItems = itemsList;

    if(sortBy === 'description') sortedItems = itemsList.slice()
      .sort((a, b) => a.description.localeCompare(b.description));

    if(sortBy === 'packed') sortedItems = itemsList.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

    return (
        <div className="list">
            <ul>
                {
                  sortedItems.map((item) => (
                    <Item key={item.id} {...item} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem}/>
                  ))              
                }
            </ul>
            <div className="actions">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">sort by input order</option>
                <option value="description">sort by description</option>
                <option value="packed">sort by packed status</option>
              </select>
              <button onClick={onClearList}>clear list</button>
            </div>
        </div>
    )
}

export default PackingList;