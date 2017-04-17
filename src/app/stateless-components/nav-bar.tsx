import * as React from 'react';
import './nav-bar.css';
import navBtn from './nav-btn';

// This is the global navigation bar component. It imports nav-btn.

const navBar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>{navBtn('HOME', '/')}</li>
                    <li>{navBtn('BLOG', '/blog')}</li>
                    <li>{navBtn('CODE', '/code')}</li>
                    <li>{navBtn('ABOUT ME', '/about')}</li>
                </ul>
            </nav>
        </div>
    );
};

export default navBar;
