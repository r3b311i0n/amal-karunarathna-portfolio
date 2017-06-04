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
                    <div>Editor{'\u0020'}⟶{'\u0020'}<span>
                        <a href="https://www.sublimetext.com">
                        Sublime{'\u0020'}Text
                    </a></span></div>
                    <div>Graphics{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li>
                                <a href="http://www.inkscape.org">Inkscape</a>{'\u0020'}⟶{'\u0020'}
                                <a href="https://github.com/svg/svgo">SVGO</a>
                            </li>
                            <li><a href="https://www.gimp.org">GIMP</a></li>
                            <li><a href="https://www.adobe.com/products/photoshop.html">Photoshop</a></li>
                        </ul>
                    </div>
                    <div>IDE{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li>
                                <a href="https://www.jetbrains.com/idea/">IntelliJ{'\u0020'}Idea</a>
                            </li>
                            <li>
                                <a href="https://www.visualstudio.com">Visual{'\u0020'}Studio</a>
                            </li>
                        </ul>
                    </div>
                    <div>Languages{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li>
                                <a href="https://www.wikiwand.com/en/C_Sharp_(programming_language)">C#</a>
                            </li>
                            <li>
                                <a href="https://www.wikiwand.com/en/Java_(programming_language)">Java</a>
                            </li>
                            <li>
                                <a href="https://www.wikiwand.com/en/JavaScript">JavaScript</a>
                            </li>
                            <li>
                                <a href="https://www.wikiwand.com/en/PHP">PHP</a>
                            </li>
                            <li>
                                <a href="https://www.wikiwand.com/en/TypeScript">TypeScript</a>
                            </li>
                        </ul>
                    </div>
                    <div>OS{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li>Linux{'\u0020'}⟶{'\u0020'}
                                <a href="https://www.archlinux.org">Arch{'\u0020'}Linux</a>,{'\u0020'}
                                <a href="https://www.ubuntu.com/desktop">Ubuntu</a>
                            </li>
                            <li>Windows{'\u0020'}⟶{'\u0020'}
                                <a href="https://www.microsoft.com/en-us/windows/features">Windows{'\u0020'}10</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about-me-properties">
                    <div>
                        Anime{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Watching{'\u0020'}⟶{'\u0020'}<span>
                        <a href="https://myanimelist.net/anime/7785/Yojouhan_Shinwa_Taikei">
                            The{'\u0020'}Tatami{'\u0020'}Galaxy
                        </a></span></sup>
                        <ul>
                            <li>
                                <a href="https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch">
                                    Code{'\u0020'}Geass
                                </a>
                            </li>
                            <li><a href="https://myanimelist.net/anime/227/FLCL">FLCL</a></li>
                            <li><a href="https://myanimelist.net/anime/918/Gintama">Gintama</a></li>
                            <li><a href="https://myanimelist.net/anime/245/Great_Teacher_Onizuka">
                                Great{'\u0020'}Teacher{'\u0020'}Onizuka
                            </a></li>
                            <li><a href="https://myanimelist.net/anime/19/Monster">Monster</a></li>
                            <li>
                                <a href="https://myanimelist.net/anime/30/Neon_Genesis_Evangelion">
                                    Neon{'\u0020'}Genesis{'\u0020'}Evangelion
                                </a>
                            </li>
                            <li>
                                <a href="https://myanimelist.net/anime/1210/NHK_ni_Youkoso">
                                    Welcome{'\u0020'}to{'\u0020'}the{'\u0020'}NHK
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>Books{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Reading{'\u0020'}⟶{'\u0020'}<span>
                        <a href="https://www.goodreads.com/book/show/30809689-norse-mythology">
                            Norse{'\u0020'}Gods
                        </a></span></sup>
                        <ul>
                            <li>A{'\u0020'}Song{'\u0020'}of{'\u0020'}Ice{'\u0020'}and{'\u0020'}Fire{'\u0020'}⟶{'\u0020'}<a
                                href="https://www.goodreads.com/book/show/13496.A_Game_of_Thrones"
                            >1
                            </a>,{'\u0020'}
                                <a href="https://www.goodreads.com/book/show/10572.A_Clash_of_Kings?ac=1&from_search=true">2</a>
                            </li>
                            <li><a href="https://www.goodreads.com/book/show/234225.Dune">Dune</a></li>
                            <li>
                                <a href="https://www.goodreads.com/series/45175-harry-potter">Harry{'\u0020'}Potter</a>
                            </li>
                            <li>
                                <a href="https://www.goodreads.com/book/show/24280.Les_Mis_rables">Les{'\u0020'}Misérables</a>
                            </li>
                            <li><a href="https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings">
                                The{'\u0020'}Lord{'\u0020'}of{'\u0020'}the{'\u0020'}Rings
                            </a></li>
                            <li><a href="https://www.goodreads.com/series/49075-the-stormlight-archive">
                                The{'\u0020'}Stormlight{'\u0020'}Archive
                            </a></li>
                            <li><a href="https://myanimelist.net/manga/656/Vagabond">Vagabond</a></li>
                            <li><a href="https://myanimelist.net/manga/104/Yotsuba_to">Yotsuba{'\u0020'}to!</a></li>
                        </ul>
                    </div>
                    <div>Football{'\u0020'}⟶{'\u0020'}
                        <span><a href="https://www.acmilan.com/en">
                        AC{'\u0020'}Milan
                        </a></span>
                        <img
                            src="./AC_Milan.svg"
                            alt="AC Milan"
                            height={23}
                            width={14}
                        />
                    </div>
                    <div>Games{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Playing{'\u0020'}⟶{'\u0020'}<span>
                        <a href="http://store.steampowered.com/app/429660/Tales_of_Berseria/">
                            Tales{'\u0020'}of{'\u0020'}Berseria
                        </a></span></sup>
                        <ul>
                            <li><a href="http://store.steampowered.com/agecheck/app/49520/">Borderlands{'\u0020'}2</a>
                            </li>
                            <li>Dark{'\u0020'}Souls{'\u0020'}⟶{'\u0020'}<a
                                href="http://store.steampowered.com/app/211420/DARK_SOULS_Prepare_To_Die_Edition/"
                            >1
                            </a>,{'\u0020'}
                                <a href="http://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/">
                                    2
                                </a>
                            </li>
                            <li><a href="http://store.steampowered.com/app/236850/Europa_Universalis_IV">
                                Europa{'\u0020'}Universalis{'\u0020'}IV
                            </a></li>
                            <li><a href="https://www.wikiwand.com/en/Klondike_(solitaire)">Klondike</a></li>
                            <li><a href="http://megamitensei.wikia.com/wiki/Shin_Megami_Tensei_III:_Nocturne">
                                MegaTen{'\u0020'}3:{'\u0020'}Nocturne
                            </a></li>
                            <li>Persona{'\u0020'}⟶{'\u0020'}<a href="http://megamitensei.wikia.com/wiki/Persona_3">3</a>,{'\u0020'}
                                <a href="http://megamitensei.wikia.com/wiki/Persona_4">4</a>
                            </li>
                        </ul>
                    </div>
                    <div>Movies{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li><a href="http://www.imdb.com/title/tt0137523/">Fight{'\u0020'}Club</a></li>
                            <li><a href="http://www.imdb.com/title/tt0110912/">Pulp{'\u0020'}Fiction</a></li>
                            <li>The{'\u0020'}Godfather{'\u0020'}⟶{'\u0020'}
                                <a href="http://www.imdb.com/title/tt0068646/">1</a>,{'\u0020'}
                                <a href="http://www.imdb.com/title/tt0071562/">2</a>
                            </li>
                            <li><a href="http://www.lordoftherings.net">The Lord of the Rings</a></li>
                        </ul>
                    </div>
                    <div>
                        Music{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Listening{'\u0020'}To{'\u0020'}⟶{'\u0020'}<span>
                        <a href="https://itunes.apple.com/us/album/after-laughter/id1227049864">
                            After{'\u0020'}Laughter{'\u0020'}-{'\u0020'}Paramore
                        </a></span></sup>
                        <ul>
                            <li><a href="http://www.arcadefire.com">Arcade{'\u0020'}Fire</a></li>
                            <li><a href="http://bjork.com">Björk</a></li>
                            <li><a href="http://www.blur.co.uk">Blur</a></li>
                            <li><a href="http://www.gorillaz.com">Gorillaz</a></li>
                            <li><a href="http://www.grimesmusic.com">Grimes</a></li>
                            <li><a href="http://lanadelrey.com">Lana{'\u0020'}Del{'\u0020'}Rey</a></li>
                            <li>
                                <a href="http://www.mychemicalromance.com">My{'\u0020'}Chemical{'\u0020'}Romance</a>
                            </li>
                            <li><a href="http://www.oasisinet.com">Oasis</a></li>
                            <li><a href="http://www.paramore.net/">Paramore</a></li>
                            <li><a href="http://www.pinkfloyd.com">Pink{'\u0020'}Floyd</a></li>
                            <li><a href="https://www.radiohead.com">Radiohead</a></li>
                            <li><a href="http://www.remhq.com">R.E.M.</a></li>
                            <li><a href="http://solarfields.com">Solar{'\u0020'}Fields</a></li>
                            <li><a href="https://stellardrone.bandcamp.com">Stellardrone</a></li>
                            <li><a href="http://www.theclash.com">The{'\u0020'}Clash</a></li>
                            <li><a href="http://www.thelibertines.com">The{'\u0020'}Libertines</a></li>
                            <li><a href="http://www.theverveonline.com">The{'\u0020'}Verve</a></li>
                            <li><a href="http://www.whitestripes.com">The{'\u0020'}White{'\u0020'}Stripes</a></li>
                            <li><a href="http://vocaloid.wikia.com/wiki/Vocaloid_Wiki">Vocaloid</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutMe;
