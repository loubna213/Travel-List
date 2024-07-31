import { useState } from "react";
import PackingList from "./PackingList";


const Form = ({onAddItems}) => {
    const [form, setForm] = useState({
        quantity: '',
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: Date.now() ,
            quantity: form.quantity, 
            description: form.description, 
            packed: false
        }

        onAddItems(newItem)
        
        setForm({
            quantity: '',
            description: ''
        })
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={form.quantity} onChange={(e) => setForm({...form, quantity: Number(e.target.value)})}>
                {
                    Array.from({length: 20}, (_, i) => i).map((num) => (
                        <option value={num} key={num}>{num}</option>
                    ))
                }
            </select>
            <input 
                required
                type="text" 
                placeholder="item..." 
                value={form.description} 
                onChange={(e) => setForm({...form, description: e.target.value})}
            />
            <button>Add</button>
        </form>
    )
}

export default Form;