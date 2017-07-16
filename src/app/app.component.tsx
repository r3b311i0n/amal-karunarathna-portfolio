import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {About} from './about.component';
import {Blog} from './blog.component';
import NavBtn from './stateless-components/nav-btn';

interface IAppState {
    showAbout: boolean;
}

export class App extends React.Component<{}, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {showAbout: (location.pathname === '/about')};
    }

    private handleNavBtnClick = () => this.setState({
        showAbout: !this.state.showAbout
    });

    public componentDidMount() {
        window.onpopstate = () => {
            if (location.pathname === '/about') {
                this.setState({
                    showAbout: true
                });
            }
            else {
                this.setState({
                    showAbout: false
                });
            }
        };
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
                    <Link to={(this.state.showAbout) ? '/' : '/about'}>{NavBtn()}</Link>
                </div>
            </div>
        );
    }
}
