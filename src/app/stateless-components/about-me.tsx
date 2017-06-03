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
                    <div>Editors <sub>⮧</sub>
                        <ul>
                            <li>Sublime Text</li>
                            <li>VIM</li>
                        </ul>
                    </div>
                    <div>Graphics <sub>⮧</sub>
                        <ul>
                            <li>Inkscape ⟶ SVGO</li>
                            <li>GIMP</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                    <div>IDE <sub>⮧</sub>
                        <ul>
                            <li>
                                IntelliJ Idea
                            </li>
                            <li>
                                Visual Studio
                            </li>
                        </ul>
                    </div>
                    <div>Languages <sub>⮧</sub>
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
                    <div>OS <sub>⮧</sub>
                        <ul>
                            <li>Linux ⟶ Arch Linux, Ubuntu</li>
                            <li>Windows ⟶ Windows 10</li>
                        </ul>
                    </div>
                </div>
                <div className="about-me-properties">
                    <div>Anime <sub>⮧</sub> <sup>Currently Watching ⟶ <span>
                        <a href="https://myanimelist.net/anime/7785/Yojouhan_Shinwa_Taikei">
                            The Tatami Galaxy
                        </a></span></sup>
                        <ul>
                            <li><a href="https://myanimelist.net/anime/227/FLCL">FLCL</a></li>
                            <li><a href="https://myanimelist.net/anime/918/Gintama">Gintama</a></li>
                            <li>
                                <a href="https://myanimelist.net/anime/30/Neon_Genesis_Evangelion">Neon Genesis
                                    Evangelion</a>
                            </li>
                            <li><a href="https://myanimelist.net/anime/1210/NHK_ni_Youkoso">Welcome to the NHK</a></li>
                        </ul>
                    </div>
                    <div>Books <sub>⮧</sub> <sup>Currently Reading ⟶ <span>
                        <a href="https://www.goodreads.com/book/show/30809689-norse-mythology">
                            Norse Gods
                        </a></span></sup>
                        <ul>
                            <li><a href="https://www.goodreads.com/book/show/234225.Dune">Dune</a></li>
                            <li><a href="https://www.goodreads.com/series/49075-the-stormlight-archive">The Stormlight
                                Archive</a></li>
                            <li><a href="https://myanimelist.net/manga/656/Vagabond">Vagabond</a></li>
                        </ul>
                    </div>
                    <div>Football ⟶ <span><a href="https://www.acmilan.com/en">AC Milan</a></span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/db/AC_Milan.svg"
                            alt="AC Milan"
                            height={23}
                            width={14}
                        />
                    </div>
                    <div>Games <sub>⮧</sub> <sup>Currently Playing ⟶ <span>
                        <a href="http://store.steampowered.com/app/429660/Tales_of_Berseria/">
                            Tales of Berseria
                        </a></span></sup>
                        <ul>
                            <li><a href="http://store.steampowered.com/app/236850/Europa_Universalis_IV">Europa
                                Universalis IV</a></li>
                            <li><a href="http://megamitensei.wikia.com/wiki/Shin_Megami_Tensei_III:_Nocturne">MegaTen 3:
                                Nocturne</a></li>
                        </ul>
                    </div>
                    <div>Music <sub>⮧</sub> <sup>Currently Listening To ⟶ <span>
                        <a href="https://itunes.apple.com/us/album/after-laughter/id1227049864">
                            After Laughter - Paramore
                        </a></span></sup>
                        <ul>
                            <li><a href="http://www.paramore.net/">Paramore</a></li>
                            <li><a href="https://www.radiohead.com">Radiohead</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutMe;
