import { useState } from "react";

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
       <li>
            <label>

                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={e => upDateToDo(id, e.target.checked, title)}
                />

                {isEditing ? (
                        <input
                            type="text"
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                        />
                    ) : (
                        title
                    )}
            </label>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => DeleteToDo(id)}>
                Delete
            </button>
       </li>
    );
};

export default ToDoItem;