import * as React from 'react';
import './app.component.css';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
const inactive = {color: 'inherit', 'font-size': '1em'};

export class App extends React.Component<void, {}> {
    constructor(props: any) {
        super(props);
    }

//    Index presentational-component.

    public render(): JSX.Element {
        return (
            <div>
                <div className="app-content">
                    <main></main>
                </div>
                {NavBar(active, inactive, inactive, inactive)}
            </div>
        );
    }
}
