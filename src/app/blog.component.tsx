import * as React from 'react';
import './blog.component.css';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
const inactive = {color: 'inherit', 'font-size': '1em'};

export class Blog extends React.Component<void, void> {
    constructor(props: any) {
        super(props);
    }

//    Blog article container-component

    public render(): JSX.Element {
        return (
            <div>
                <div className="blog-content">
                    <main></main>
                </div>
                <aside>{NavBar(inactive, active, inactive, inactive)}</aside>
            </div>
        );
    }
}
