import React from 'react'
import logo from '../images/logo.png'

export const Title = () => (
    <div className="logo-box">
        <img src={logo} alt="logo" className='logo'/>
    </div>
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}


export default Header