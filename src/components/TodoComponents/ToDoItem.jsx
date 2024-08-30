import React,{ useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDataSaverOn } from "react-icons/md";


import './styleCheckbox.css'

const ToDoItem = ({completed, id, title, upDateToDo, DeleteToDo}) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleEditClick = () => {
        if (isEditing) {
            // Se estiver no modo de edição e o título mudou, atualiza a tarefa
            if (newTitle !== title) {
                upDateToDo(id, completed, newTitle);
            }
        }
        // Alterna o modo de edição
        setIsEditing(!isEditing);
    };
    
    return (

        <li class="flex items-center w-6/12 justify-between mx-auto px-4 text-white bg-[#262626] border border-[#333333] m-3 h-14 rounded-md shadow-2xl">

            <div class="flex items-center">
            <input 
                class="custom-checkbox ml-1"
                type="checkbox" 
                checked={completed}
                onChange={e => upDateToDo(id, e.target.checked, title)}
            />

                
                <label class="ml-5">
                    {isEditing ? (
                        <input
                            class="form-input rounded-full text-[#fff] bg-[#262626] border-2 border-gray-50]"
                            type="text"
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                        />
                    ) : (
                        title
                    )}
                </label>
            </div>
        
            <div class="flex items-center">
                <button 
                    class="mr-3"
                    onClick={handleEditClick}>
                    {isEditing ? <MdDataSaverOn className="mr-1" />:<FaRegEdit className="mr-1"/>}
                </button>
                <button 
                    class="mr-1"
                    onClick={() => DeleteToDo(id)}>
                    <RiDeleteBin6Line />
                </button>
            </div>

        </li>
    
    );
};

export default ToDoItem;