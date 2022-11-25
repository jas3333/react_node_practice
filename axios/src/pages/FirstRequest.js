import { useEffect } from 'react';
import axios from 'axios';

const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
    const fetchData = async () => {
        try {
            const response = await axios(url);
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container-col '>
            <div className='container-col auto mg-top-vlg align border pad-lg'>
                <h1>First Request</h1>
                <div className='underline-mid'></div>
                <p className='size-md auto'>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
                    cupidatat.
                </p>
                <p className='size-md auto mg-top-md'>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi
                    Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
                    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                    reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
                    adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
                    consectetur et est culpa et culpa duis.
                </p>
                <p className='size-md auto mg-top-md'>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
                    cupidatat.
                </p>
            </div>
        </div>
    );
};

export default FirstRequest;
