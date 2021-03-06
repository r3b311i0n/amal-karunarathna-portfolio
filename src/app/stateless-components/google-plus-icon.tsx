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

import './google-plus-icon.pcss';

//noinspection TsLint
const GooglePlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
         shapeRendering="geometricPrecision" imageRendering="optimizeQuality" colorRendering="optimizeQuality">
        <title>Google +</title>
        <g fill="#fff" fillRule="evenodd">
            <path
                d="M0 30C0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30z"
                fill="#dc4e41"/>
            <path
                className="google-plus-g"
                d="m 24.545455,29.142857 h 9.013636 c 0.08182,0.475 0.15,0.95 0.15,1.574286 C 33.709091,36.145714 30.054545,40 24.545455,40 19.268182,40 15,35.752143 15,30.5 15,25.247857 19.268182,21 24.545455,21 c 2.577272,0 4.731818,0.936429 6.395454,2.483571 L 28.35,25.967143 c -0.709091,-0.678572 -1.95,-1.465714 -3.804545,-1.465714 -3.259091,0 -5.918182,2.687142 -5.918182,5.998571 0,3.311429 2.659091,5.998571 5.918182,5.998571 3.777272,0 5.195454,-2.700714 5.413636,-4.098571 h -5.413636 z"
            />
            <path
                className="google-plus-plus"
                d="m 45,29.142857 v 2.714286 h -2.727273 v 2.714286 h -2.727273 v -2.714286 h -2.727272 v -2.714286 h 2.727272 v -2.714286 h 2.727273 v 2.714286 z"
            />
        </g>
    </svg>
);

export {GooglePlusIcon};
