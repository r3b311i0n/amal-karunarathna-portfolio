import * as React from 'react';
import './nav-bar.css';
import navBtn from './nav-btn';

// This is the global navigation bar component. It imports nav-btn.

const navBar = () => {
    return (
        <ul>
            <li>{navBtn('CODE')}</li>
            <li>{navBtn('BLOG')}</li>
            <li>{navBtn('ABOUT ME')}</li>
        </ul>
    );
};

export default navBar;
