import * as React from 'react';
import './nav-bar.css';
import navBtn from './nav-btn';

// This is the global navigation bar component. It imports nav-btn.

const navBar = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li>{navBtn('BLOG')}</li>
                <li>{navBtn('CODE')}</li>
                <li>{navBtn('ABOUT ME')}</li>
            </ul>
        </div>
    );
};

export default navBar;
