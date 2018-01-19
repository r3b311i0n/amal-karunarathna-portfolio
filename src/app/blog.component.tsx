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
import Scrollbars from 'react-custom-scrollbars';
import {spring, StaggeredMotion} from 'react-motion';
import {Link, Redirect, Route, Switch} from 'react-router-dom';

import {Article} from './article.component';
import './blog.component.pcss';
import {BlogLink} from './stateless-components/blog-link';
import {Spinner} from './stateless-components/spinner';

// todo: Add scroll to top button.

const database = firebase.database();

const staggerStyles = (prevInterpolatedStyles: any) => prevInterpolatedStyles.map((_: { h: number }, i: number) => {
    return i === 0
        ? {h: spring(1, {stiffness: 200, damping: 23})}
        : {h: spring(prevInterpolatedStyles[i - 1].h)};
});

interface IBlogState {
    articleRoutes: JSX.Element[];
    showSpinner: boolean;
    willAnimateInBlogLinkList: boolean;
    windowHeight: number;
}

export class Blog extends React.Component<{}, IBlogState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            articleRoutes: [],
            showSpinner: true,
            willAnimateInBlogLinkList: false,
            windowHeight: window.innerHeight,
        };
        this.setWindowHeight = this.setWindowHeight.bind(this);
    }

//    Blog article component.

    private blogLinkList: JSX.Element[];
    private defaultStyles: Array<{ h: number }> = [];
    private index: any;

    private setWindowHeight(): void {
        this.setState({windowHeight: window.innerHeight});
    }

    private fetchIndex(): Promise<{}> {
        return new Promise((resolve) => {
            const indexRef = database.ref('index/');
            // Fetch index.
            indexRef.once('value')
                .then((snapshot) => {
                    this.index = snapshot.val();
                    const routes: JSX.Element[] = [];
                    this.blogLinkList = Object.entries(this.index)
                        .map(([key, value]) => {
                            // Initialise and array of routes.
                            //noinspection TsLint
                            routes.push((
                                    <Route
                                        key={key}
                                        path={`/${key}`}
                                        render={() =>
                                            <Article articleAddress={value.article} articleDate={value.date}
                                                     articleHeading={value.header}/>}
                                    />
                                )
                            );

                            // Initialises blog entries.
                            return (
                                <div
                                    key={key}
                                >
                                    <Link
                                        key={key}
                                        to={key}
                                    >
                                        {BlogLink(value.header, value.tags.split(','))}
                                    </Link>
                                </div>);
                        });
                    // Sort blog list from older to newer posts.
                    this.blogLinkList = this.blogLinkList.reverse();
                    // Add redirect to last post.
                    routes.push(<Redirect key={routes.length + 1} from="/" to={`/${routes.length}`}/>);
                    // Populate render() with Route list.
                    this.setState({articleRoutes: routes});
                    // Push style objects into array for StaggerMotion of Blog List.
                    this.blogLinkList.forEach(() => this.defaultStyles.push({h: 0}));
                    this.setState({
                        showSpinner: false,
                        willAnimateInBlogLinkList: true,
                    });
                });
            resolve();
        });
    }

    public async componentDidMount() {
        await this.fetchIndex();
        window.addEventListener('resize', this.setWindowHeight);
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.setWindowHeight);
    }

    public render(): JSX.Element {
        return (
            <div>
                <div>
                    <aside>
                        <div className="blog-link-list">
                            <Scrollbars
                                autoHeight={true}
                                autoHeightMin={100}
                                autoHeightMax={this.state.windowHeight}
                                autoHide={true}
                                autoHideDuration={200}
                                autoHideTimeout={1000}
                            >
                                {this.state.willAnimateInBlogLinkList ? <StaggeredMotion
                                    defaultStyles={this.defaultStyles}
                                    styles={staggerStyles}
                                >
                                    {(interpolatingStyles: object[]) =>
                                        <div>
                                            {interpolatingStyles.map((style: { h: number }, i: number) =>
                                                <div key={i}>
                                                    <div
                                                        style={{opacity: style.h}}
                                                    >
                                                        {this.blogLinkList[i]}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    }
                                </StaggeredMotion> : <div/>}
                            </Scrollbars>
                        </div>
                    </aside>
                    {(this.state.showSpinner) ?
                        <Spinner/> :
                        <main>
                            <Switch>{this.state.articleRoutes}</Switch>
                        </main>
                    }
                </div>
            </div>
        );
    }
}
