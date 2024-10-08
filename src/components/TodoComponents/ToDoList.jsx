
import ToDoItem from './ToDoItem';

const ToDoList = ({toDo, upDateToDo, DeleteToDo}) => {
    return (
        <ul>
            {toDo.length === 0}
            {toDo.map(toDo => {
                return (
                    <ToDoItem
                        {...toDo}
                        key={toDo.id}
                        upDateToDo={upDateToDo}
                        DeleteToDo={DeleteToDo}
                    />
                );
            })}
        </ul>
    );
};

export default ToDoList;
