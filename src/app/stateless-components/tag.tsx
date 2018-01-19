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

import './tag.pcss';

const Tag = (tagName: string) => {
    switch (tagName) {
        case 'C#':
            return (
                <div className="tag-root c-sharp" key={tagName}>
                    {tagName}
                </div>
            );
        case 'CSS':
            return (
                <div className="tag-root css" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Design':
            return (
                <div className="tag-root design" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Java':
            return (
                <div className="tag-root java" key={tagName}>
                    {tagName}{'\u0020'}🍵
                </div>
            );
        case 'JavaScript':
            return (
                <div className="tag-root javascript" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Kotlin':
            return (
                <div className="tag-root kotlin" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Preact':
            return (
                <div className="tag-root preact" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Python':
            return (
                <div className="tag-root python" key={tagName}>
                    {tagName}{'\u0020'}🐍
                </div>
            );
        case 'React':
            return (
                <div className="tag-root react" key={tagName}>
                    {tagName}
                </div>
            );
        case 'TypeScript':
            return (
                <div className="tag-root typescript" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Typography':
            return (
                <div className="tag-root typography" key={tagName}>
                    {tagName}{'\u0020'}ℱ
                </div>
            );
        case 'Web':
            return (
                <div className="tag-root web" key={tagName}>
                    {tagName}
                </div>
            );
        default:
            return (
                <div className="tag-root misc" key={tagName}>
                    {tagName}
                </div>
            );
    }
};

export {Tag};
