import * as React from 'react';
import './app.component.css';
import NavBar from './stateless-components/nav-bar';

export class App extends React.Component<void, void> {
    constructor(props: any) {
        super(props);
    }

    private static active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
    private static inactive = {color: 'inherit', 'font-size': '1em'};

//    Index container-component

    public render(): JSX.Element {
        return (
            <div>
                <div className="app-content">
                    <main></main>
                </div>
                <aside>{NavBar(App.active, App.inactive, App.inactive, App.inactive)}</aside>
            </div>
        );
    }
}
