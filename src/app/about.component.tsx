import * as React from 'react';
import './about.component.css';
import navBar from './stateless-components/nav-bar';

export class About extends React.Component<void, void> {
    constructor(props: any) {
        super(props);
    }

    // Container-component of ME!!!.

    public render(): JSX.Element {
        return (
            <div className="about-root">
                <div className="about-content">
                    <header><h2 className="about-header">Amal Karunarathna</h2></header>
                    <main>
                        <section className="about-me">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores
                                autem
                                beatae blanditiis delectus eveniet facilis hic labore, laudantium natus non numquam
                                obcaecati pariatur perspiciatis placeat quisquam repellendus sapiente, sunt.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
                                aspernatur consequuntur cum deserunt exercitationem illo labore laudantium mollitia
                                natus nemo neque nostrum nulla odio omnis, provident quo rerum voluptates.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae doloremque, id
                                inventore ipsa libero natus nesciunt, obcaecati qui quibusdam quo rem, reprehenderit
                                soluta tempora temporibus. Dolore ea tenetur voluptas.
                            </p>
                        </section>
                    </main>
                </div>
                <aside>{navBar()}</aside>
            </div>
        );
    }
}
