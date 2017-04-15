import * as React from 'react';
import './app.component.css';
import navBar from './stateless-components/nav-bar';

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.karmaTester();
    }

    private componentDidMount() {
        console.log('LOADED!');
    }

    private karmaTester(): number {
        console.log('KARMA!!!');

        return 0;
    }

//    Highest-level container-component

    public render(): JSX.Element {
        return (
            <div className="app-root">
                <aside>{navBar()}</aside>
            </div>
        );
    }
}
