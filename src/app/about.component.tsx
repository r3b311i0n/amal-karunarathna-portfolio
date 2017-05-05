import * as firebase from 'firebase';
import * as React from 'react';
import {Motion, spring} from 'react-motion';
import './about.component.css';
import AboutMe from './stateless-components/about-me';
import NavBar from './stateless-components/nav-bar';
import Social from './stateless-components/social';

const active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
const inactive = {color: 'inherit', 'font-size': '1em'};

// 3 vars for 3 paragraphs

let myDescription1: string;
let myDescription2: string;
let myDescription3: string;
const database = firebase.database();
const meRef = database.ref('me/');

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
        meRef.once('value').then((snapshot) => {
            myDescription1 = snapshot.child('para1').val();
            myDescription2 = snapshot.child('para2').val();
            myDescription3 = snapshot.child('para3').val();

            // For triggering the slide-in animation for AboutMe.
            this.setState({willAnimateIn: true});
        });
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
                                {AboutMe(myDescription1, myDescription2, myDescription3)}
                            </div>}
                        </Motion>
                    </main>
                </div>
                {NavBar(inactive, inactive, inactive, active)}
                <footer>{Social()}</footer>
            </div>
        );
    }
}
