import { useContext } from 'react';
import { ToDoContext } from '../../pages/ToDoList';

const Form = () => {
    const { task, setTask, taskList, setTaskList } = useContext(ToDoContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (task) {
            setTaskList([...taskList, { title: task }]);
            setTask('');
        }
    };

    return (
        <div className='container-col'>
            <form className='container align' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={task}
                    className='size-sm'
                    placeholder='Enter task'
                    onChange={(event) => setTask(event.target.value)}
                />
                <button type='submit' className='btn'>
                    Add
                </button>
            </form>
        </div>
    );
};

export default Form;
