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
import {presets, spring, StaggeredMotion} from 'react-motion';

import './social.pcss';
import {SocialIcon} from './stateless-components/social-icon';

//    Social links component.

// Seven objects for seven social links representing initial x coordinates.
const motionObject = {h: 0};
const defaultStyles = [motionObject, motionObject, motionObject, motionObject, motionObject, motionObject, motionObject];

const staggerStyles = (prevInterpolatedStyles: any) => prevInterpolatedStyles.map((_: { h: number }, i: number) => {
    return i === 0
        ? {h: spring(1, presets.gentle)}
        : {h: spring(prevInterpolatedStyles[i - 1].h)};
});

export class Social extends React.Component<{}, {}> {
    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="social-root">
                <StaggeredMotion
                    defaultStyles={defaultStyles}
                    styles={staggerStyles}
                >
                    {(interpolatingStyles: object[]) =>
                        <div>
                            {interpolatingStyles.map((style: { h: number }, i: number) =>
                                <div key={i}>
                                    <div
                                        className="social-motion-block"
                                        style={{opacity: style.h}}
                                    >
                                        {SocialIcon[i]}
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </StaggeredMotion>
            </div>
        );
    }
}
