import React from 'react';
import { useNavigate } from 'react-router-dom';
import { INavButtonProps } from "@/interfaces";
import { navButton } from "@/styles"

const NavButton = ({url, buttonName}: INavButtonProps) => {
    const navigate = useNavigate();
    return (
        <button className={navButton.container} onClick={() => navigate(url)}>{buttonName}</button>
    );
};

export default NavButton;