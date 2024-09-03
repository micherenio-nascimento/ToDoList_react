import React,{ useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDataSaverOn } from "react-icons/md";
import './styleCheckbox.css'


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

        <li className="flex flex-col sm:flex-row justify-between items-center w-full bg-[#262626] border border-[#333333] rounded-md px-4 py-2 my-2 text-white">
  <div className="flex items-center w-full sm:w-auto">
    <input
      className="custom-checkbox mr-4"
      type="checkbox"
      checked={completed}
      onChange={e => upDateToDo(id, e.target.checked, title)}
    />
    {isEditing ? (
      <input
        className="form-input rounded-full bg-[#262626] border-2 border-gray-50 text-white w-full sm:w-auto"
        type="text"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
      />
    ) : (
      <label className={`flex-grow ${completed ? "completed" : ""}`}>{title}</label>
    )}
  </div>
  <div className="flex mt-2 sm:mt-0">
    <button className="mr-2" onClick={handleEditClick}>
      {isEditing ? <MdDataSaverOn /> : <FaRegEdit />}
    </button>
    <button onClick={() => DeleteToDo(id)}>
      <RiDeleteBin6Line />
    </button>
  </div>
</li>

    
    );
};

export default ToDoItem;