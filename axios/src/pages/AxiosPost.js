import axios from 'axios';
import { useState } from 'react';

const url = 'http://localhost:4000/data';

const AxiosPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(url, { name: name, email: email });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

        console.log(name, email);
    };

    return (
        <div className='container mg-top-vlg auto'>
            <form className='form-input' onSubmit={handleSubmit}>
                <div className='container align mg-bot-sm'>
                    <label className='size-tiny'>Name</label>
                    <input
                        type='text'
                        value={name}
                        placeholder='Enter name'
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='container align mg-bot-sm'>
                    <label className='size-tiny'>Email</label>
                    <input
                        type='text'
                        value={email}
                        placeholder='Enter name'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <button type='submit ' className='btn'>
                    Submit
                </button>
            </form>
        </div>
    );
};
export default AxiosPost;
