import * as React from 'react';
import './app.component.css';
import navBar from './stateless-components/nav-bar';

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

//    Highest-level container-component

    public render(): JSX.Element {
        return (
            <div>
                <header>{navBar()}</header>
            </div>
        );
    }
}
