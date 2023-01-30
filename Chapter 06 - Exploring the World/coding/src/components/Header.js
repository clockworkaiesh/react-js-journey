import React, { useState } from 'react';
import logo from '../images/logo.png'


export const Title = () => (
    <div className="logo-box">
        <img src={logo} alt="logo" className='logo'/>
    </div>
);

const Header = () => {
const [isUser, setIsUser] = useState(false)

    return (
        <div className="header">
            <Title />
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
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
        </div>
    )
}


export default Header