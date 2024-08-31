import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

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
            <form onSubmit={handleSubmit} class=" flex justify-center items-center bg-[#0D0D0D] text-white">

                <div>
                    <input 
                        class="form-input px-4 py-3 border-0 rounded-lg text-[#fff] bg-[#262626] w-96 border-gray-50] m-5 wm"
                        placeholder="Adicione uma nova tarefa"
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        type="text" 
                        id="item"                    
                    />
                </div>
                <button class="bg-[#1E6F9F] rounded w-20 h-8 flex items-center justify-center h-11 ">
                    <p className="mr-1">Criar</p> <IoIosAddCircleOutline />
                 </button>
                

            </form>
        </>
    );
};

export default ToDoForms;