import React from 'react';
import "../styles/Header.css";

// header component to explain details of app to users

const Header = () => {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <p>Click <b>Last Name</b> to sort or use <b>Search</b> to search for a last name.</p>
    </div>
  )
}

export default Header;