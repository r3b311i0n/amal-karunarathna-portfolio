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

export class About extends React.Component<{}, IAboutState> {
    constructor(props: any) {
        super(props);

        this.state = {
            willAnimateIn: false
        };
    }

    // 3 vars for 3 paragraphs
    private static currAnime: string;
    private static currBook: string;
    private static currGame: string;
    private static currMusic: string;

    public componentDidMount() {
        meRef.once('value').then((snapshot) => {
            About.currAnime = snapshot.child('anime').val();
            About.currBook = snapshot.child('book').val();
            About.currGame = snapshot.child('game').val();
            About.currMusic = snapshot.child('music').val();

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
                                {AboutMe(About.currAnime, About.currBook, About.currGame, About.currMusic)}
                            </div>}
                        </Motion>
                    </main>
                </div>
            </div>
        );
    }
}
