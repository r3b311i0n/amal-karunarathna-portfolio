import * as React from 'react';
import './app.component.css';
import navBar from './stateless-components/nav-bar';

export class App extends React.Component<void, void> {
    constructor(props: any) {
        super(props);
    }

//    Index container-component

    public render(): JSX.Element {
        return (
            <div className="app-root">
                <div className="app-content">
                    <main></main>
                </div>
                <aside>{navBar()}</aside>
            </div>
        );
    }
}
