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

import './codepen-icon.pcss';

//noinspection TsLint
const CodePenIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"
         shapeRendering="geometricPrecision" imageRendering="optimizeQuality" colorRendering="optimizeQuality">
        <title>CodePen</title>
        <g fill="none" fillRule="evenodd">
            <path
                d="M.217 30C.217 13.551 13.551.218 30 .218S59.782 13.55 59.782 30c0 16.449-13.333 29.782-29.782 29.782C13.551 59.782.218 46.45.218 30z"
                fill="#0B0B0A"/>
            <path
                d="M1.5 30C1.5 14.26 14.26 1.5 30 1.5S58.5 14.26 58.5 30 45.74 58.5 30 58.5 1.5 45.74 1.5 30z"
                fill="#FFF"/>
            <path
                className="codepen-box"
                d="M45.988 25.604l-.01-.058c-.007-.038-.014-.076-.024-.112-.005-.022-.014-.043-.02-.065a1.635 1.635 0 0 0-.035-.096.663.663 0 0 0-.03-.065.688.688 0 0 0-.045-.088c-.012-.022-.026-.042-.038-.062a.934.934 0 0 0-.102-.139 1.187 1.187 0 0 0-.067-.073c-.017-.017-.034-.035-.052-.051a2.208 2.208 0 0 0-.076-.064l-.06-.045-.022-.017-14.168-9.445a1.333 1.333 0 0 0-1.478 0l-14.167 9.445-.022.017c-.022.014-.041.03-.06.045-.027.02-.052.042-.076.064l-.053.051a.929.929 0 0 0-.066.073.856.856 0 0 0-.102.139 1.335 1.335 0 0 0-.084.15l-.03.065a1.154 1.154 0 0 0-.034.096c-.007.022-.015.043-.02.065-.01.036-.017.074-.024.112-.004.02-.008.038-.01.058a1.27 1.27 0 0 0-.013.173v9.446c0 .058.005.116.013.174a1.42 1.42 0 0 0 .034.169c.005.022.013.043.02.064.01.032.021.065.035.098.008.022.02.043.029.064l.045.09c.013.02.025.04.04.06a1.178 1.178 0 0 0 .22.263 1.197 1.197 0 0 0 .136.11l.022.016 14.167 9.445a1.331 1.331 0 0 0 1.478 0l14.168-9.445.022-.017.06-.045c.026-.02.05-.042.076-.064l.052-.052a1.17 1.17 0 0 0 .169-.21l.038-.062a.968.968 0 0 0 .045-.089c.01-.021.022-.042.03-.064.013-.033.023-.066.034-.098.007-.02.016-.042.021-.064a1.42 1.42 0 0 0 .024-.112l.01-.057c.008-.058.012-.116.012-.174v-9.446c0-.059-.004-.117-.012-.173zm-14.156-6.782l10.437 6.957-4.661 3.119-5.776-3.864v-6.212zm-2.664 0v6.212l-5.775 3.864-4.662-3.119 10.437-6.957zM17.664 28.27l3.334 2.229-3.334 2.23v-4.46zm11.504 13.907l-10.437-6.957 4.662-3.118 5.775 3.863v6.212zm1.332-8.527L25.789 30.5l4.711-3.151 4.712 3.151-4.712 3.151zm1.332 8.527v-6.212l5.776-3.863 4.661 3.118-10.437 6.957zm11.504-9.449L40.003 30.5l3.333-2.23v4.46z"
                fill="#0B0B0A"/>
        </g>
    </svg>
);

export {CodePenIcon};
