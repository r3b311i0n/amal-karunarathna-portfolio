import * as React from 'react';
import {Motion, spring} from 'react-motion';
import './about.component.css';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
const inactive = {color: 'inherit', 'font-size': '1em'};

export class About extends React.Component<void, any> {
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
                                <section className="about-me">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores
                                        autem
                                        beatae blanditiis delectus eveniet facilis hic labore, laudantium natus non
                                        numquam
                                        obcaecati pariatur perspiciatis placeat quisquam repellendus sapiente, sunt.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
                                        aspernatur consequuntur cum deserunt exercitationem illo labore laudantium
                                        mollitia
                                        natus nemo neque nostrum nulla odio omnis, provident quo rerum voluptates.
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae doloremque,
                                        id
                                        inventore ipsa libero natus nesciunt, obcaecati qui quibusdam quo rem,
                                        reprehenderit
                                        soluta tempora temporibus. Dolore ea tenetur voluptas.
                                    </p>
                                </section>
                            </div>}
                        </Motion>
                    </main>
                </div>
                <aside>{NavBar(inactive, inactive, inactive, active)}</aside>
            </div>
        );
    }
}
