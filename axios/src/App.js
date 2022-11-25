import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DadJoke from './pages/DadJoke';
import FirstRequest from './pages/FirstRequest';
import AxiosPost from './pages/AxiosPost';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<FirstRequest />} />
                <Route path='dadjoke' element={<DadJoke />} />
                <Route path='post' element={<AxiosPost />} />
            </Routes>
        </Router>
    );
}

export default App;
