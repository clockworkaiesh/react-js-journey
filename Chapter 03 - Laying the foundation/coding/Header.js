// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation
import React from "react";
import logo from "./logo.png";
import avatar from './user-avatar.png';
/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

function Header(){
  return (
    <header>
      <div className="logo-box">
        <img src={logo} alt="logo"/>
      </div>

      <div className="search-box">
        <input type="text" name="" id="" className="search-input"/>
        <button className="btn btn-primary">Search</button>
      </div>

      <div className="account-box">
        <img src={avatar} alt="avatar"/>
      </div>
    </header>
  )
}

export default Header;