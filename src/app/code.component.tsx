import * as React from 'react';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', fontSize: '1.333em'};
const inactive = {color: 'inherit', fontSize: '1em'};

export class Code extends React.Component<void, {}> {
    constructor(props: any) {
        super(props);
    }

//    Programming section presentational-component.

    public render(): JSX.Element {
        return (
            <div>
                <div className="code-content">
                    <main></main>
                </div>
                {NavBar(inactive, inactive, active, inactive)}
            </div>
        );
    }
}
