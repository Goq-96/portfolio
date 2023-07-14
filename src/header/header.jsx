import './header.scss'
import logo from './../images/masterly-logo.png'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import Modal from '../components/modal/modal';
import MenuList from '../components/listMenu/listMenu';


const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false)
    const list = ['Home', 'About', 'Experience', 'Portfolio','News', 'Contact Us'];

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);
        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <header className="header-wrapper">
            <div className="header-container">
                <div className='maser-logo'>
                    <NavLink to='/'>
                        <img src={logo} alt='logo' />
                    </NavLink>
                </div>
                {(screenWidth > 992) ? (
                    <nav className='menu-list'>
                        <ul>
                            <MenuList list={list} />
                        </ul>
                    </nav>
                )
                    :
                    <div className='iconDiv'>
                        <button className='iconBtn' onClick={() => setOpen(!open)}>
                            <BiMenu className='icon-menu' />
                        </button>
                    </div>
                }
                {
                    open && <Modal  open={open} setOpen={setOpen} />
                }
            </div>
        </header>
    )
}

export default Header;
