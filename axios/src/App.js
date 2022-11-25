import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DadJoke from './pages/DadJoke';
import FirstRequest from './pages/FirstRequest';
import AxiosPost from './pages/AxiosPost';
import Navbar from './components/Navbar';
import ToDoList from './pages/ToDoList';

function App() {
    return (
        <Router>
            <Navbar />
            <div className='container-col'>
                <Routes>
                    <Route path='/' element={<FirstRequest />} />
                    <Route path='dadjoke' element={<DadJoke />} />
                    <Route path='post' element={<AxiosPost />} />
                    <Route path='todo' element={<ToDoList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
