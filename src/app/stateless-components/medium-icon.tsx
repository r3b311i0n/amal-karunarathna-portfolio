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

import './medium-icon.pcss';

//noinspection TsLint
const MediumIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"
         shapeRendering="geometricPrecision" imageRendering="optimizeQuality" colorRendering="optimizeQuality">
        <title>Medium</title>
        <g fill="none" fillRule="evenodd">
            <path
                d="M.217 30C.217 13.551 13.551.218 30 .218S59.782 13.55 59.782 30c0 16.449-13.333 29.782-29.782 29.782C13.551 59.782.218 46.45.218 30z"
                fill="#0be370"/>
            <path
                d="M1.5 30C1.5 14.26 14.26 1.5 30 1.5S58.5 14.26 58.5 30 45.74 58.5 30 58.5 1.5 45.74 1.5 30z"
                fill="#FFF"/>
            <path
                className="green1"
                d="M35.277 17.03c-.152-.077-.277 0-.277.172v21.091l9.17 4.618c.456.23.83-.002.83-.517V22.091a.267.267 0 0 0-.147-.239l-9.576-4.822"
                fill="#32FC8D"/>
            <path
                className="green2"
                d="M25 33.034l9.885-15.876a.35.35 0 0 1 .441-.124l9.549 4.718a.223.223 0 0 1 .091.318L35.048 38 25 33.034"
                fill="#0BE370"/>
            <path
                className="green3"
                d="M15.65 17.137c-.625-.307-.836-.08-.47.505l9.577 15.318L35 38 24.824 21.725a.44.44 0 0 0-.18-.162l-8.995-4.426"
                fill="#14C767"/>
            <path
                className="green4"
                d="M25 42.391c0 .517-.374.75-.83.52l-8.616-4.357c-.305-.155-.554-.562-.554-.907V17.406c0-.345.25-.5.554-.347l9.323 4.716a.226.226 0 0 1 .123.201v20.415"
                fill="#00AB6C"/>
        </g>
    </svg>
);

export default MediumIcon;
