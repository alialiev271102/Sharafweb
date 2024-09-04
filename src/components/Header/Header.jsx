import {useEffect, useState} from 'react';
import './Header.css';
import burgerBtn from '../../../public/images/burger-btn.svg';
import krest from '../../../public/images/krest.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll', 'blurred');
        } else {
            document.body.classList.remove('no-scroll', 'blurred');
        }
    }, [menuOpen]);

    return (
        <>
            <div className={`header`}>
                <button className="burger" onClick={toggleMenu}>
                    <img src={burgerBtn} alt="" />
                </button>
                <div className={`nav-menu`}>
                    <button className="nav-btn">About</button>
                    <button className="nav-btn">Categories</button>
                    <button className="nav-btn">How to join</button>
                </div>
                <div>
                    <button className="form-btn">Apply</button>
                </div>
            </div>
            {menuOpen && (
                <div className="mobile-menu">
                    <button className="none-btn" onClick={toggleMenu}><img src={krest} alt=""/></button>
                    <div className='mobile-buttons'>
                        <button className="none-btn">About</button>
                        <button className="none-btn">Categories</button>
                        <button className="none-btn">How to join</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
