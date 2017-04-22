import * as React from 'react';
import {NavLink} from 'react-router-dom';
import './nav-btn.css';

// Stateless nav-btn component that takes btn label and route destination, then puts them in a ReactRouterDom.NavLink.

const navBtn = (btnLabel: string, routeDestination: string) => {
    return (
        <NavLink to={routeDestination} className="nav-btn-root">{btnLabel}</NavLink>
    );
};

export default navBtn;
