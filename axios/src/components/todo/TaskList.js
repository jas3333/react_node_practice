import { useContext } from 'react';
import { ToDoContext } from '../../pages/ToDoList';
import Task from './Task';

const TaskList = () => {
    const { taskList } = useContext(ToDoContext);

    return (
        <div className='container-col mg-top-lg'>
            {taskList.map((item, index) => {
                const { title } = item;
                return <Task key={index} task={title} />;
            })}
        </div>
    );
};

export default TaskList;
