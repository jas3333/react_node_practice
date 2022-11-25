import { createContext, useState, useEffect } from 'react';
import Form from '../components/todo/Form';

const FormContext = createContext();

const taskItems = ['Go to the store', 'Create a task app'];

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([taskItems]);
    const [showForm, setShowForm] = useState(true);

    const formContextValues = {
        task,
        setTask,
        taskList,
        setTaskList,
    };

    return (
        <FormContext.Provider value={formContextValues}>
            <div className='container-col mg-top-vlg border auto pad-lg align'>
                <h1>To do List</h1>
                <div className='underline-lg'></div>
                <Form />
            </div>
        </FormContext.Provider>
    );
};

export default ToDoList;
