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

import './article.component.pcss';
import {Disqus} from './disqus.component';

// todo: Tweak blockquote style.

const database = firebase.database();

export interface IArticleProps {
    articleAddress: string;
    articleDate: string;
    articleHeading: string;
}

interface IArticleState {
    areCommentsShown: boolean;
    articleBody: string;
    articleDate: string;
    articleHeading: string;
    articleStyle: { alpha: OpaqueConfig | number };
}

export class Article extends React.Component<IArticleProps, IArticleState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            areCommentsShown: false,
            articleBody: '',
            articleDate: '',
            articleHeading: '',
            articleStyle: {
                alpha: 0,
            },
        };
    }

    private static readonly articleDefaultStyle = {
        alpha: 0,
    };

    private timeoutId: number;

    public async componentDidMount() {
        await database.ref(this.props.articleAddress + '/')
            .once('value')
            .then((snapshot) => {
                this.setState({
                    articleBody: snapshot.val(),
                    articleDate: this.props.articleDate,
                    articleHeading: this.props.articleHeading,
                    articleStyle: {
                        alpha: spring(1, presets.gentle),
                    },
                });
                this.timeoutId = window.setTimeout(() => this.setState({
                    areCommentsShown: true,
                }), 1000);
            });
    }

    public componentWillUnmount() {
        window.clearTimeout(this.timeoutId);
    }

    public render() {
        return (
            <div className="blog-article">
                <Motion
                    defaultStyle={Article.articleDefaultStyle}
                    style={this.state.articleStyle}
                >
                    {(interpolation: any) => <div
                        style={{
                            opacity: interpolation.alpha,
                        }}
                    >
                        <h1 className="blog-article-heading">{this.state.articleHeading}</h1>
                    </div>}
                </Motion>
                <Motion
                    defaultStyle={Article.articleDefaultStyle}
                    style={this.state.articleStyle}
                >
                    {(interpolation: any) => <div
                        style={{
                            opacity: interpolation.alpha,
                        }}
                    >
                        <span className="blog-article-date"><small>{this.state.articleDate}</small></span>
                        <div dangerouslySetInnerHTML={{__html: this.state.articleBody}}/>
                    </div>}
                </Motion>
                {this.state.areCommentsShown ?
                    <Disqus
                        id={location.pathname.replace('/', '')}
                        title={this.state.articleHeading}
                        url={location.href}
                    /> : undefined}
            </div>
        );
    }
}
