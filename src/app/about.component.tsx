import * as React from 'react';
import {Motion, spring} from 'react-motion';
import './about.component.css';
import AboutMe from './stateless-components/about-me';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
const inactive = {color: 'inherit', 'font-size': '1em'};

interface IAboutState {
    willSlideIn: boolean;
}

export class About extends React.Component<void, IAboutState> {
    constructor(props: any) {
        super(props);

        this.state = {
            willSlideIn: false
        };
    }

    private componentDidMount() {
        this.setState({willSlideIn: true});
    }

    // Container-component of ME!!!.

    public render(): JSX.Element {
        return (
            <div>
                <div className="about-content">
                    <header><h2 className="about-header">Amal Karunarathna</h2></header>
                    <main>
                        <Motion
                            style={{
                                alpha: this.state.willSlideIn ? spring(1) : spring(0),
                                x: this.state.willSlideIn ? spring(0) : spring(300)
                            }}
                        >
                            {(interpolation: any) => <div
                                style={{transform: `translateX(${interpolation.x}px)`, opacity: interpolation.alpha}}
                            >
                                <AboutMe/>
                            </div>}
                        </Motion>
                    </main>
                </div>
                <aside>{NavBar(inactive, inactive, inactive, active)}</aside>
            </div>
        );
    }
}
