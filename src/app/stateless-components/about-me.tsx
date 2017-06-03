import * as React from 'react';
import './about-me.pcss';

// My stateless component.
// todo: Look into 4k media query.

const AboutMe = (myDescription1: string, myDescription2: string, myDescription3: string) => (
    <section>
        <div className="about-me-root">
            <span className="about-me-description">Hi, I'm Amal. I make things that run in computers.</span>
            <div className="about-me-information">
                <div className="about-me-properties">
                    <div>Editors:
                        <ul>
                            <li>Sublime Text</li>
                            <li>VIM</li>
                        </ul>
                    </div>
                    <div>IDE:
                        <ul>
                            <li>
                                IntelliJ Idea
                            </li>
                            <li>
                                Visual Studio
                            </li>
                        </ul>
                    </div>
                    <div>Languages:
                        <ul>
                            <li>
                                C#
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                PHP
                            </li>
                            <li>
                                TypeScript
                            </li>
                        </ul>
                    </div>
                    <div>OS:
                        <ul>
                            <li>Linux ⇒ Arch Linux, Ubuntu</li>
                            <li>Windows ⇒ Windows 10</li>
                        </ul>
                    </div>
                    <div>Graphics:
                        <ul>
                            <li>Inkscape ⇒ SVGO</li>
                            <li>GIMP</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
                <div className="about-me-properties">
                    <div>Editors:
                        <ul>
                            <li>Sublime Text</li>
                            <li>VIM</li>
                        </ul>
                    </div>
                    <div>IDE:
                        <ul>
                            <li>
                                IntelliJ Idea
                            </li>
                            <li>
                                Visual Studio
                            </li>
                        </ul>
                    </div>
                    <div>Languages:
                        <ul>
                            <li>
                                C#
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                PHP
                            </li>
                            <li>
                                TypeScript
                            </li>
                        </ul>
                    </div>
                    <div>OS:
                        <ul>
                            <li>Linux ⇒ Arch Linux, Ubuntu</li>
                            <li>Windows ⇒ Windows 10</li>
                        </ul>
                    </div>
                    <div>Graphics:
                        <ul>
                            <li>Inkscape ⇒ SVGO</li>
                            <li>GIMP</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutMe;
