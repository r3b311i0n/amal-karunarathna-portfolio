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

import * as firebase from 'firebase';
import * as React from 'react';
import {Motion, OpaqueConfig, presets, spring} from 'react-motion';

import './about.component.pcss';
import {Social} from './social';
import {AboutMe} from './stateless-components/about-me';
import {Spinner} from './stateless-components/spinner';

const database = firebase.database();
const meRef = database.ref('me/');

interface IAboutState {
    aboutMeMotion: { alpha: number | OpaqueConfig };
    showSpinner: boolean;
}

export class About extends React.Component<{}, IAboutState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            aboutMeMotion: {
                alpha: 0,
            },
            showSpinner: true,
        };
    }

    private static currAnime: string;
    private static currBook: string;
    private static currGame: string;
    private static currMusic: string;
    private static currTV: string;

    public componentDidMount() {
        meRef.once('value')
            .then((snapshot) => {
                About.currAnime = snapshot.child('anime').val();
                About.currBook = snapshot.child('book').val();
                About.currGame = snapshot.child('game').val();
                About.currMusic = snapshot.child('music').val();
                About.currTV = snapshot.child('tv').val();

                // For triggering the alpha animation for AboutMe and hiding the spinner.
                this.setState({
                    aboutMeMotion: {alpha: spring(1, presets.gentle)},
                    showSpinner: false,
                });
            });
    }

    // Component of ME!!!.

    public render(): JSX.Element {
        return (
            <div className="about-root">
                <div className="about-content">
                    {(this.state.showSpinner) ?
                        <Spinner/> :
                        <Motion
                            style={this.state.aboutMeMotion}
                        >
                            {(interpolation: any) =>
                                <div
                                    style={{
                                        opacity: interpolation.alpha,
                                    }}
                                >
                                    <header><h2 className="about-header">
                                        Amal Karunarathna
                                    </h2>
                                        <Social/>
                                    </header>
                                    <main>
                                        {AboutMe(About.currAnime, About.currBook, About.currGame, About.currMusic, About.currTV)}
                                    </main>
                                </div>
                            }
                        </Motion>
                    }
                </div>
            </div>
        );
    }
}
