import * as React from 'react';
import './nav-btn.css';

const navBtn = (btnLabel: string) => {
    return (
        <a className="nav-btn">{btnLabel}</a>
    );
};

export default navBtn;
