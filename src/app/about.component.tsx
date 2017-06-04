import * as firebase from 'firebase';
import * as React from 'react';
import {Motion, presets, spring} from 'react-motion';
import './about.component.pcss';
import Social from './social';
import AboutMe from './stateless-components/about-me';

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

    // 3 vars for 3 paragraphs
    private static myDescription1: string;
    private static myDescription2: string;
    private static myDescription3: string;

    public componentDidMount() {
        meRef.once('value').then((snapshot) => {
            About.myDescription1 = snapshot.child('para1').val();
            About.myDescription2 = snapshot.child('para2').val();
            About.myDescription3 = snapshot.child('para3').val();

            // For triggering the slide-in animation for AboutMe.
            this.setState({willAnimateIn: true});
        });
    }

    // Component of ME!!!.

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
                    <Social/>
                    <main>
                        <Motion
                            style={{
                                alpha: this.state.willAnimateIn ? spring(1) : spring(0),
                                x: this.state.willAnimateIn ? spring(0, presets.gentle) : spring(300)
                            }}
                        >
                            {(interpolation: any) => <div
                                style={{transform: `translateX(${interpolation.x}px)`, opacity: interpolation.alpha}}
                            >
                                {AboutMe(About.myDescription1, About.myDescription2, About.myDescription3)}
                            </div>}
                        </Motion>
                    </main>
                </div>
            </div>
        );
    }
}
