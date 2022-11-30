import { useContext } from 'react';
import { ToDoContext } from '../../pages/ToDoList';
import Task from './Task';

const TaskList = () => {
    const { taskList, handleDelete } = useContext(ToDoContext);

    return (
        <div className='container-col mg-top-lg'>
            {taskList.map((item, index) => {
                const { title, id } = item;
                return <Task key={index} task={title} handleDelete={handleDelete} id={id} />;
            })}
        </div>
    );
};

export default TaskList;
