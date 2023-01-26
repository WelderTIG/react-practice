import React from 'react';
import { NavButton } from '@/components';
import { navbar } from "@/styles"

const Navbar = () => {
    return (
        <div className={navbar.container}>
            <NavButton url="/" buttonName='Home' />
            <div className={navbar.menu}>
                <NavButton url="git-repos" buttonName='Github' />
                <NavButton url="blockchain" buttonName='Blocks' />
            </div>
        </div>
    );
};

export default Navbar;