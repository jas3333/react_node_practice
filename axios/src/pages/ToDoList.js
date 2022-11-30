import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Form from '../components/todo/Form';
import TaskList from '../components/todo/TaskList';

export const ToDoContext = createContext();

const url = 'http://localhost:4000/task';

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [showForm, setShowForm] = useState(true);

    const getTaskList = async () => {
        try {
            const response = await axios.get('http://localhost:4000/data');
            const data = response.data;
            console.log(data);
            setTaskList(data);
        } catch (error) {}
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (task) {
            try {
                const response = await axios.post(url, { task });
                setTask('');
            } catch (error) {}
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.post('http://localhost:4000/delete', { id });
        } catch (error) {}
    };
    useEffect(() => {
        getTaskList();
        console.log('Running...');
    }, []);

    const contextValues = {
        // Objects
        taskList,
        task,
        // Functions
        setTask,
        handleDelete,
        handleSubmit,
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
