import * as React from 'react';
import {Link} from 'react-router-dom';
import './nav-btn.css';

// Stateless nav-btn component that takes btn label and route destination, then puts them in a ReactRouterDom.Link.

const navBtn = (btnLabel: string, routeDestination: string) => {
    return (
        <Link to={routeDestination} className="nav-btn">{btnLabel}</Link>
    );
};

export default navBtn;
