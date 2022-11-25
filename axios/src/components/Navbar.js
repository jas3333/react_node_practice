import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar space'>
            <div className='container'>
                <Link to='/' className='nav-links'>
                    Home
                </Link>
            </div>
            <div className='container'>
                <Link to='dadjoke' className='nav-links'>
                    DadJoke
                </Link>
                <Link to='post' className='nav-links'>
                    Post
                </Link>
                <Link to='todo' className='nav-links'>
                    To do list
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
