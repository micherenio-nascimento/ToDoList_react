import { useState } from "react";

const ToDoForms = ({onSubmit}) => {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {

        e.preventDefault()

        if(newItem === "") return 
        
        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="item">New item</label>
                    <input 
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        type="text" 
                        id="item"                    
                    />
                </div>
                <button>Add</button>

            </form>
        </>
    );
};

export default ToDoForms;