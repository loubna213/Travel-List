import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from "react";
import Header from './components/Header'
import Stats from './components/Stats'
import Form from './components/Form'
import PackingList from './components/PackingList'

const App = () => {
  const [items, setItems] = useState([])

  function handleAddItem(item){
    setItems([...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function handleChecked(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }

  function handleClearList() {
    const confirmed = confirm('Are you sure you want to delete all the items')
    
    if(confirmed) setItems([])
  }

  return (
    <div className='app'>
      <Header/>
      <Form onAddItems={handleAddItem}/>
      <PackingList 
        itemsList={items} 
        onDeleteItem={handleDeleteItem} 
        onCheckItem={handleChecked}
        onClearList={handleClearList}
      />
      <Stats items={items}/>
    </div>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)