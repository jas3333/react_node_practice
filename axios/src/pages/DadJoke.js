import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';

const DadJoke = () => {
    const [joke, setJoke] = useState('...ready for a corny dad joke?');

    const fetchJoke = async () => {
        try {
            const { data } = await axios.get(url, {
                headers: {
                    Accept: 'application/json',
                },
            });
            setJoke(data.joke);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container-col size-full'>
            <div className='container-col auto mg-top-vlg align'>
                <h1 className='text-md'>Dad Joke</h1>
                <div className='underline-full'></div>
                <button className='btn mg-top-lg' onClick={fetchJoke}>
                    Random Joke
                </button>
            </div>
            <div className='container auto mg-top-lg size-md'>
                <h1>{joke}</h1>
            </div>
        </div>
    );
};

export default DadJoke;
