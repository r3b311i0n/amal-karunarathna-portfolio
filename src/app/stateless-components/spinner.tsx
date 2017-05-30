import * as React from 'react';

//noinspection TsLint
const Spinner = () => (
    <svg className="spinner-root" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.166666 21.166666" height="80"
         width="80">
        <path
            d="M20.678 10.583a10.095 10.095 0 0 1-10.095 10.095A10.095 10.095 0 0 1 .49 10.583 10.095 10.095 0 0 1 10.583.49a10.095 10.095 0 0 1 10.095 10.094z"
            fill="none" stroke="#333" strokeWidth=".977" strokeDashoffset="7"/>
        <g fill="#333" className="spinner-rotate">
            <path d="M10.62 9.797l3.743 3.742-.749.748-3.741-3.741z"/>
            <path d="M9.873 10.546l3.741-3.742.749.748-3.742 3.742z"/>
            <path d="M11.37 10.546l-3.742 3.741-.749-.748 3.742-3.742z"/>
            <path d="M7.628 6.804l3.741 3.742-.748.748-3.742-3.742z"/>
        </g>
    </svg>
);

export default Spinner;
