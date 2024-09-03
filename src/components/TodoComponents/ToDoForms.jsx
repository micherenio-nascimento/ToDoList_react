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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center bg-[#0D0D0D] text-white px-4 sm:px-6 lg:px-8 py-4">
  <input
    className="form-input px-4 py-2 w-full sm:w-96 bg-[#262626] text-white rounded-lg border-0 mb-4 sm:mb-0 sm:mr-4"
    placeholder="Adicione uma nova tarefa"
    value={newItem}
    onChange={e => setNewItem(e.target.value)}
    type="text"
    id="item"
  />
  <button className="bg-[#1E6F9F] rounded-lg px-4 py-2 flex items-center justify-center w-full sm:w-auto">
    <p className="mr-1">Criar</p> <IoIosAddCircleOutline />
  </button>
</form>

        </>
    );
};

export default ToDoForms;