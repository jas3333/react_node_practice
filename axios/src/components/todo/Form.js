import { useContext } from 'react';
import { ToDoContext } from '../../pages/ToDoList';

const Form = () => {
    const { task, setTask, taskList, setTaskList, handleSubmit } = useContext(ToDoContext);

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
