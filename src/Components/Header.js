import React from 'react';
import { Link } from 'react-router-dom';

import "../Css/Header.css"

const Header = () => {
    return (
        <Link to="/" className="toDoTitle">
            <h1>To Do List📒</h1>
        </Link>
    );
}

export default Header;