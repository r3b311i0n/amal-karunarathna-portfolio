import * as React from 'react';
import NavBtn from './nav-btn';
import './nav-menu.pcss';

// This is the global navigation bar component. It imports nav-btn.
// todo: Implement collapse into button.

const NavMenu = (home: object, blog: object, code: object, about: object) => (
    <div className="nav-menu-root">
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

export default NavMenu;
