import * as React from 'react';
import {NavLink} from 'react-router-dom';
import './nav-btn.pcss';

// Stateless nav-btn component that takes btn label and route destination, then puts them in a ReactRouterDom.NavLink.

// todo: Have nav-btn emerge out from the page.

const NavBtn = (btnLabel: string, emphasis: object, routeDestination: string) => (
    <NavLink to={routeDestination} className="nav-btn-root" style={emphasis}>{btnLabel}</NavLink>
);

export default NavBtn;
