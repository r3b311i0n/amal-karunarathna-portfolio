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

import './scroll-up-btn.pcss';

//noinspection TsLint
const ScrollUpBtn = (showBtn: string) => (
    <svg className="scroll-up-btn-root" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.875 15.875" height="60"
         width="60" style={{visibility: showBtn}}>
        <path
            d="M15.875 7.938a7.938 7.938 0 0 1-7.938 7.937A7.938 7.938 0 0 1 0 7.937 7.938 7.938 0 0 1 7.938 0a7.938 7.938 0 0 1 7.937 7.938z"
            fill="#fff"
        />
        <g>
            <path d="M9.23 3.04v10.584H8.172V3.04z" fill="#333"/>
            <path d="M7.51 3.04v10.584H6.453V3.04z" fill="#333"/>
            <path d="M8.593 2.094L4.29 6.397l-.748-.748 4.303-4.303z" fill="#333"/>
            <path d="M7.845 1.346l4.303 4.303-.748.748-4.303-4.303z" fill="#333"/>
        </g>
    </svg>
);

export default ScrollUpBtn;
