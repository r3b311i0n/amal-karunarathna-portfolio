import * as React from 'react';
import './nav-bar.css';
import NavBtn from './nav-btn';

// This is the global navigation bar component. It imports nav-btn.

const NavBar = (home: object, blog: object, code: object, about: object) => (
    <div className="nav-bar-root">
        <nav>
            <ul>
                <li>{NavBtn('HOME', home, '/')}</li>
                <li>{NavBtn('BLOG', blog, '/blog')}</li>
                <li>{NavBtn('CODE', code, '/code')}</li>
                <li>{NavBtn('ABOUT ME', about, '/about')}</li>
            </ul>
        </nav>
    </div>
);

export default NavBar;
