import * as React from 'react';
import {Motion, spring} from 'react-motion';
import './about.component.css';
import {Social} from './social.component';
import AboutMe from './stateless-components/about-me';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
const inactive = {color: 'inherit', 'font-size': '1em'};

interface IAboutState {
    willAnimateIn: boolean;
}

export class About extends React.Component<void, IAboutState> {
    constructor(props: any) {
        super(props);

        this.state = {
            willAnimateIn: false
        };
    }

    private componentDidMount() {
        // For triggering the slide-in animation for AboutMe.
        this.setState({willAnimateIn: true});
    }

    // Presentational-component of ME!!!.

    public render(): JSX.Element {
        return (
            <div className="about-root">
                <div className="about-content">
                    <header>
                        <Motion
                            style={{
                                alpha: this.state.willAnimateIn ? spring(1) : spring(0)
                            }}
                        >
                            {(interpolation: any) => <h2
                                className="about-header"
                                style={{opacity: interpolation.alpha}}
                            >
                                Amal Karunarathna
                            </h2>}
                        </Motion>
                    </header>
                    <main>
                        <Motion
                            style={{
                                alpha: this.state.willAnimateIn ? spring(1) : spring(0),
                                x: this.state.willAnimateIn ? spring(0) : spring(300)
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
                <Social/>
            </div>
        );
    }
}
