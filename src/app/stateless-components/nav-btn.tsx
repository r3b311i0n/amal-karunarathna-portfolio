import * as React from 'react';
import './nav-btn.pcss';

// This is the navigation button component.

const NavBtn = (isAboutShown: boolean) => {
    // Animate nav btn.
    let transformArrow: { transform?: string, transformOrigin?: string };
    let transformArrowShaft: { transform?: string, transformOrigin?: string };

    if (!isAboutShown) {
        transformArrow = {transform: 'rotate(0) translateY(0px)', transformOrigin: '50% 50%'};
        transformArrowShaft = {transform: 'scaleX(1)', transformOrigin: '0% 0%'};
    }
    else {
        transformArrow = {transform: 'rotate(-270deg) translateY(-3px)', transformOrigin: '50% 50%'};
        transformArrowShaft = {transform: 'scaleX(0.5)', transformOrigin: '0% 0%'};
    }

    //noinspection TsLint
    return (
        <svg className="nav-btn-root" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.875 15.875" height="60"
             width="60">
            <path
                d="M15.875 7.938a7.938 7.938 0 0 1-7.938 7.937A7.938 7.938 0 0 1 0 7.937 7.938 7.938 0 0 1 7.938 0a7.938 7.938 0 0 1 7.937 7.938z"
                fill="#fff"
            />
            <g className="nav-btn-arrow" fill="#333" style={transformArrow}>
                <path className="nav-btn-arrow-shaft" d="M2.46 6.747h12.171v1.058H2.461z" style={transformArrowShaft}/>
                <path className="nav-btn-arrow-shaft" d="M2.46 8.467h12.171v1.058H2.461z" style={transformArrowShaft}/>
                <path className="nav-btn-arrow-head" d="M1.807 7.384l4.303 4.303-.749.748-4.303-4.303z"/>
                <path className="nav-btn-arrow-head" d="M1.058 8.132L5.361 3.83l.749.749L1.807 8.88z"/>
            </g>
        </svg>
    );
};

export default NavBtn;
