import React, { useState } from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export const Title = () => (
    <div className="logo-box">
        <img src={logo} alt="logo" className='logo'/>
    </div>
);

const Header = () => {
const [isUser, setIsUser] = useState(false)
const [menuSidebar, setMenuSidebar] = useState(false)
    return (
        <div className="header">
            <Title />
            <nav className={menuSidebar ? "show" : ""}>
                <ul className="nav-items">
                    <li> <Link className='nav-link' to="/">Home </Link></li>
                    <li> <Link className='nav-link' to="/about">About </Link></li>
                    <li> <Link className='nav-link' to="/contact">Contact </Link></li>
                    <li> <Link className='nav-link' to="/cart">Cart </Link></li>
                </ul>

                <div className="account-button">
                    {
                        isUser ? <button className='btn btn-primary' 
                        onClick={() => {
                            setIsUser(!isUser)
                        }}>
                            Logout
                        </button> :
                        <button className='btn btn-primary'
                            onClick={() => {
                                setIsUser(!isUser)
                            }}
                            >Login
                        </button>
                    }
                    
                </div>
            </nav>
            
            <button className="menu-toggle"
                onClick={(e) => {
                    e.preventDefault();
                    setMenuSidebar(!menuSidebar)
                }}
            >
               {menuSidebar ? "✗" : "☰ "} 
            </button>
        </div>
    )
}


export default Header