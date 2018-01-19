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

import './twitter-icon.pcss';

//noinspection TsLint
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
         shapeRendering="geometricPrecision" imageRendering="optimizeQuality" colorRendering="optimizeQuality">
        <title>Twitter</title>
        <g fill="none" fillRule="evenodd">
            <path
                d="M0 30C0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30z"
                fill="#55acee"/>
            <path
                className="twitter-bird"
                d="M29.102 24.384l.062 1.038-1.049-.127c-3.819-.487-7.155-2.14-9.988-4.915l-1.385-1.377-.357 1.017c-.755 2.267-.273 4.661 1.301 6.271.84.89.65 1.017-.797.487-.504-.17-.945-.296-.987-.233-.147.149.357 2.076.756 2.839.545 1.06 1.658 2.097 2.875 2.712l1.028.487-1.217.021c-1.175 0-1.217.021-1.091.466.42 1.377 2.077 2.839 3.924 3.475l1.3.444-1.132.678a11.815 11.815 0 0 1-5.624 1.568c-.945.021-1.721.106-1.721.17 0 .211 2.56 1.398 4.05 1.864 4.47 1.377 9.779.784 13.766-1.568 2.833-1.673 5.666-5 6.988-8.22.713-1.716 1.426-4.851 1.426-6.355 0-.975.063-1.102 1.239-2.267.692-.678 1.343-1.42 1.468-1.631.21-.403.19-.403-.88-.043-1.785.636-2.036.551-1.155-.402.65-.678 1.427-1.907 1.427-2.267 0-.063-.315.042-.672.233-.377.212-1.217.53-1.846.72l-1.133.36-1.029-.699c-.566-.38-1.364-.805-1.783-.932-1.07-.296-2.707-.254-3.673.085-2.623.953-4.28 3.41-4.091 6.101z"
                fill="#fff"/>
            <path
                className="twitter-hashtag"
                d="M33.37 26.79h-5.683l-1.64 6.523h5.722zm-2.93-11.114l-2.03 8.105h5.703l2.05-8.105h3.125l-2.011 8.105h6.093v3.008h-6.855l-1.602 6.524h6.211V36.3h-6.972l-2.032 8.086h-3.125l2.012-8.086h-5.723l-2.011 8.086h-3.145L22.16 36.3h-6.152v-2.988h6.875l1.64-6.524h-6.288v-3.008h7.05l1.993-8.105z"
            />
        </g>
    </svg>
);

export default TwitterIcon;
