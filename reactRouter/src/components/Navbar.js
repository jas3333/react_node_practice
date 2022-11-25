import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);

    return (
        <nav className='navbar'>
            <div className='container eighty auto align space '>
                <div className='container '>
                    <h1>Logo</h1>
                </div>
                <div className='nav-links '>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                    <Link to='about' className='nav-link'>
                        About
                    </Link>
                    <Link to='contact' className='nav-link'>
                        Contact
                    </Link>
                </div>
                <FaBars className='mobile-button' onClick={() => setShowMenu(!showMenu)} />
            </div>
            <div className={`${showMenu ? 'show-menu menu ' : 'menu'}`}>
                <Link to='/' className='nav-link'>
                    Home
                </Link>
                <Link to='about' className='nav-link'>
                    About
                </Link>
                <Link to='contact' className='nav-link'>
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
