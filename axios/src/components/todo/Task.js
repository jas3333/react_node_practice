import { AiFillDelete } from 'react-icons/ai';
const Task = ({ task, handleDelete, id }) => {
    return (
        <>
            <div className='task'>
                <h3>{task}</h3>
                <div className='container'>
                    <AiFillDelete className='delete-icon' onClick={() => handleDelete(id)} />
                </div>
            </div>
        </>
    );
};

export default Task;
