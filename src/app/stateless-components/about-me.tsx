import * as React from 'react';
import './about-me.pcss';

// My stateless component.

const AboutMe = (myDescription1: string, myDescription2: string, myDescription3: string) => (
    <section className="about-me">
        <p>{myDescription1}</p>
        <p>{myDescription2}</p>
        <p>{myDescription3}</p>
    </section>
);

export default AboutMe;
