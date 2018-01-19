/*
 * MIT License
 *
 * Copyright (c) 2017-2018 Amal Shasthree Karunarathna
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
