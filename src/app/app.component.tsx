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
import {Link, Route, Switch} from 'react-router-dom';

import {About} from './about.component';
import {Blog} from './blog.component';
import NavBtn from './stateless-components/nav-btn';

interface IAppState {
    showAbout: boolean;
}

// todo: Disable article link if already on its page.
// todo: Implement dark mode.

export class App extends React.Component<{}, IAppState> {
    public constructor(props: any) {
        super(props);

        this.currentArticleLocation = location.pathname !== '/about' ? location.pathname : '/';
        this.state = {showAbout: (location.pathname === '/about')};
    }

    private currentArticleLocation: string;

    private handleNavBtnClick = () => this.setState({
        showAbout: !this.state.showAbout,
    });

    public componentDidMount() {
        window.onpopstate = () => {
            if (location.pathname === '/about') {
                this.setState({
                    showAbout: true,
                });
            } else {
                this.setState({
                    showAbout: false,
                });
            }
        };
    }

    public componentDidUpdate() {
        if (location.pathname !== '/about') {
            this.currentArticleLocation = location.pathname;
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className="app-content">
                    <Switch>
                        <Route path="/about" component={About}/>
                        <Route component={Blog}/>
                    </Switch>
                </div>
                <div onClick={this.handleNavBtnClick}>
                    <Link to={(this.state.showAbout) ? this.currentArticleLocation : '/about'}>{NavBtn()}</Link>
                </div>
            </div>
        );
    }
}
