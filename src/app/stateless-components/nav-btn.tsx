import * as React from 'react';
import './nav-btn.pcss';

// This is the navigation button component.

const NavBtn = (isAboutShown: boolean) => {
    // Check browser for SVG transform-origin.
    const isChrome: boolean = navigator.userAgent.indexOf('Chrome') > -1;
    const arrowTransformOrigin = (isChrome) ? '50% 50%' : '50% 55%';
    const arrowShaftTransformOrigin = (isChrome) ? '0% 0%' : '50% 40%';
    // Animate nav btn.
    let homePropsOpacity: number;
    let transformArrow: { transform: string, transformOrigin: string };
    let transformArrowShaftLeft: { transform: string, transformOrigin: string };
    let transformArrowShaftRight: { transform: string, transformOrigin: string };

    // todo: Use a timeout for fillOpacity on homeProps.
    // todo: Use a var for home-props transition timing.
    // todo: Take care of jaggies in home icon.

    // Animation rules for nav-btn.
    if (isAboutShown) {
        homePropsOpacity = 0;
        transformArrow = {
            transform: 'rotate(270deg) translateX(1px)',
            transformOrigin: arrowTransformOrigin
        };
        transformArrowShaftLeft = {
            transform: 'scaleY(1.8) translateX(1.8px) translateY(-1px)',
            transformOrigin: arrowShaftTransformOrigin
        };
        transformArrowShaftRight = {
            transform: 'scaleY(1.8) translateX(-1.8px) translateY(-1px)',
            transformOrigin: arrowShaftTransformOrigin
        };
    }
    else {
        homePropsOpacity = 1;
        transformArrow = {
            transform: 'rotate(0) translateX(0px)',
            transformOrigin: arrowTransformOrigin
        };
        transformArrowShaftLeft = {
            transform: 'scaleY(1)',
            transformOrigin: arrowShaftTransformOrigin
        };
        transformArrowShaftRight = {
            transform: 'scaleY(1)',
            transformOrigin: arrowShaftTransformOrigin
        };
    }

    //noinspection TsLint
    return (
        <svg className="nav-btn-root" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.875 15.875" height="60"
             width="60">
            <path className="nav-btn-arrow-background"
                  d="M15.875 7.938a7.938 7.938 0 0 1-7.938 7.937A7.938 7.938 0 0 1 0 7.937 7.938 7.938 0 0 1 7.938 0a7.938 7.938 0 0 1 7.937 7.938z"
                  fill="#fff"/>
            <g className="nav-btn-arrow" fill="#333" style={transformArrow}>
                <path d="M5.82 6.191v5.292h-.793V6.192z" className="nav-btn-arrow-shaft"
                      style={transformArrowShaftLeft}/>
                <path d="M10.848 6.191v5.292h-.794V6.192z" className="nav-btn-arrow-shaft"
                      style={transformArrowShaftRight}/>
                <path d="M8.678 3.881L4.621 7.938l-.705-.707 4.057-4.056z"/>
                <path d="M7.973 3.175l4.057 4.056-.706.707L7.268 3.88z"/>
            </g>
            <g className="nav-btn-home-props" fill="#333" fillOpacity={homePropsOpacity}>
                <path d="M5.556 10.954h4.763v.529H5.556zM6.085 6.88h1.059v1.057H6.085zM8.731 6.88H9.79v1.057H8.73z"/>
                <path d="M7.144 8.839H8.73v2.117H7.144z"/>
            </g>
        </svg>
    );
};

export default NavBtn;
