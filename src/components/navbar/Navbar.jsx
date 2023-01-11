import React from 'react';
import cl from "./navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cl.container}>
            <Link to="/">Home</Link>
            <div className={cl.menu}>
                <Link to="git-repos">Github</Link>
                <Link to="blockchain">Blocks</Link>
            </div>
        </div>
    );
};

export default Navbar;