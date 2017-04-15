import * as React from 'react';
import './app.component.css';
import navBar from './stateless-components/nav-bar';

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        App.karmaTester();
    }

    private static karmaTester(): number {
        console.log('KARMA!!!');

        return 0;
    }

    private componentDidMount() {
        console.log('LOADED!');
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
