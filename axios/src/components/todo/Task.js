import { AiFillDelete } from 'react-icons/ai';
const Task = ({ task }) => {
    return (
        <>
            <div className='task'>
                <h3>{task}</h3>
                <div className='container'>
                    <AiFillDelete className='delete-icon' />
                </div>
            </div>
        </>
    );
};

export default Task;
