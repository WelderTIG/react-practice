import React from 'react';
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="wrong">
            Wrong url!!! <Link to="/">Click to go home.</Link>
        </div>
    );
};

export default NotFoundPage;