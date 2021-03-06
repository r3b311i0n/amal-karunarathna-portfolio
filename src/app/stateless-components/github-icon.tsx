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

import './github-icon.pcss';

//noinspection TsLint
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
         shapeRendering="geometricPrecision" imageRendering="optimizeQuality" colorRendering="optimizeQuality">
        <title>GitHub</title>
        <g fill="#151513" fillRule="evenodd">
            <path
                d="M30 0C13.434 0 0 13.542 0 30.247 0 43.61 8.596 54.949 20.516 58.948c1.5.28 2.05-.656 2.05-1.455 0-.721-.028-3.104-.041-5.631-8.346 1.83-10.107-3.57-10.107-3.57-1.365-3.495-3.331-4.425-3.331-4.425-2.722-1.877.205-1.839.205-1.839 3.013.214 4.599 3.117 4.599 3.117 2.676 4.624 7.018 3.288 8.73 2.515.27-1.955 1.047-3.29 1.905-4.045-6.664-.765-13.669-3.358-13.669-14.948 0-3.302 1.172-6 3.091-8.119-.311-.761-1.338-3.838.291-8.004 0 0 2.52-.813 8.252 3.1 2.393-.67 4.96-1.006 7.51-1.017 2.549.011 5.117.347 7.515 1.017 5.726-3.913 8.241-3.1 8.241-3.1 1.633 4.166.606 7.243.295 8.004 1.923 2.119 3.087 4.817 3.087 8.12 0 11.616-7.018 14.174-13.698 14.923 1.076.939 2.034 2.78 2.034 5.601 0 4.048-.034 7.305-.034 8.301 0 .805.54 1.748 2.06 1.451C51.415 54.94 60 43.606 60 30.247 60 13.542 46.568 0 30 0"/>
            <path
                d="M11.451 43.22c-.066.15-.3.194-.513.092-.217-.098-.34-.301-.269-.45.065-.153.3-.196.516-.093.217.097.341.302.266.451m1.213 1.353c-.143.133-.422.071-.611-.138-.196-.209-.233-.488-.088-.623.147-.132.418-.07.614.139.196.211.234.488.085.622m1.181 1.725c-.184.128-.484.008-.67-.258-.183-.267-.183-.586.005-.714.186-.128.481-.013.67.252.182.27.182.59-.005.72m1.617 1.666c-.164.181-.514.133-.77-.114-.261-.242-.334-.584-.17-.765.167-.182.518-.13.776.114.26.241.34.586.164.765m2.232.968c-.073.235-.41.341-.749.242-.338-.103-.56-.378-.492-.615.07-.236.409-.347.75-.24.339.102.561.374.49.613m2.451.18c.009.247-.279.451-.635.456-.358.008-.648-.192-.652-.435 0-.25.282-.452.64-.458.356-.007.647.191.647.437m2.281-.389c.042.241-.205.489-.559.555-.347.063-.67-.086-.713-.325-.043-.247.208-.494.556-.558.354-.062.67.083.716.328"/>
        </g>
        <path
            className="evil-eyes"
            d="M19.771 24.04c-1.319 0-2.316.898-2.896 1.903C16.295 26.95 16 28.18 16 29.52c0 1.34.295 2.57.875 3.576C17.455 34.1 18.452 35 19.771 35c1.32 0 2.319-.899 2.899-1.904.58-1.006.875-2.237.875-3.576 0-1.34-.295-2.57-.875-3.577-.58-1.005-1.579-1.904-2.899-1.904zM40.313 24.04c-1.319 0-2.316.898-2.896 1.903-.58 1.006-.875 2.237-.875 3.577 0 1.34.295 2.57.875 3.576C37.997 34.1 38.994 35 40.313 35c1.32 0 2.319-.899 2.899-1.904.58-1.006.875-2.237.875-3.576 0-1.34-.295-2.57-.875-3.577-.58-1.005-1.579-1.904-2.899-1.904z"
            fill="none"/>
    </svg>
);

export {GitHubIcon};
