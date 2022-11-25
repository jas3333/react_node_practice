import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
    return (
        <div className='container '>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
