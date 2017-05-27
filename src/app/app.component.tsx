import * as React from 'react';
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

//    Index presentational-component.

    private handleNavBtnClick = () => this.setState({
        showAbout: !this.state.showAbout
    });

    public render(): JSX.Element {
        return (
            <div>
                <div className="app-content">
                    {(this.state.showAbout) ? <About/> : <Blog/>}
                </div>
                <div onClick={this.handleNavBtnClick}>
                    {NavBtn(this.state.showAbout)}
                </div>
            </div>
        );
    }
}
