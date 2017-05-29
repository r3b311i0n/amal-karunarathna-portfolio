import * as React from 'react';
import {Route} from 'react-router-dom';
import {About} from './about.component';
import './app.component.pcss';
import {Blog} from './blog.component';
import NavBtn from './stateless-components/nav-btn';

interface IAppState {
    showAbout: boolean;
}

export class App extends React.Component<{}, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {showAbout: false};
    }

    private handleNavBtnClick = () => this.setState({
        showAbout: !this.state.showAbout
    });

    public render(): JSX.Element {
        return (
            <div>
                <div className="app-content">
                    {(this.state.showAbout) ? <About/> : <Route component={Blog}/>}
                </div>
                <div onClick={this.handleNavBtnClick}>
                    {NavBtn(this.state.showAbout)}
                </div>
            </div>
        );
    }
}
