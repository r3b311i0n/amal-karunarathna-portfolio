import * as React from 'react';
import './about-me.css';

// My stateless component.

const AboutMe = (myDescription: string) => (
    <section className="about-me">
        <p>{myDescription}</p>
    </section>
);

export default AboutMe;
