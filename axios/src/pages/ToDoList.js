import { createContext, useState, useEffect } from 'react';
import Form from '../components/todo/Form';
import TaskList from '../components/todo/TaskList';

export const ToDoContext = createContext();

const taskItems = [
    {
        title: 'Go to the store',
    },
    {
        title: 'Make a todo list app',
    },
];

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([...taskItems]);
    const [showForm, setShowForm] = useState(true);

    const contextValues = {
        task,
        setTask,
        taskList,
        setTaskList,
    };

    return (
        <ToDoContext.Provider value={contextValues}>
            <div className='container-col mg-top-vlg border auto pad-lg '>
                <h1 className='text-center'>To do List</h1>
                <div className='underline-lg'></div>
                <Form />
                <TaskList />
            </div>
        </ToDoContext.Provider>
    );
};

export default ToDoList;
