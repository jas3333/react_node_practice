const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className='container-col'>
            <form className='container align' onSubmit={handleSubmit}>
                <input type='text' name='' value='' className='size-sm' placeholder='Enter task' />
                <button type='submit' className='btn'>
                    Add
                </button>
            </form>
        </div>
    );
};

export default Form;
