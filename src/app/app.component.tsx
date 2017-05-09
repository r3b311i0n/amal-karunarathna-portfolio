import * as React from 'react';
import './app.component.pcss';
import NavMenu from './stateless-components/nav-menu';

const active = {color: 'rgba(0, 0, 0, 1)', fontSize: '1.333em'};
const inactive = {color: 'inherit', fontSize: '1em'};

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
                {NavMenu(active, inactive, inactive, inactive)}
            </div>
        );
    }
}
