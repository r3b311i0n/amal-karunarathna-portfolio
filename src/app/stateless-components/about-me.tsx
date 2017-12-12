import * as React from 'react';

import './about-me.pcss';

// My stateless component.
// todo: Look into 4k media query.

//noinspection TsLint
const AboutMe = (currAnime: string, currBook: string, currGame: string, currMusic: string, currTV: string) => (
    <section>
        <div className="about-me-root">
            <span className="about-me-description">Hi,{'\u0020'}I’m{'\u0020'}Amal.{'\u0020'}I{'\u0020'}make{'\u0020'}things{'\u0020'}that{'\u0020'}run{'\u0020'}in{'\u0020'}computers.
                <a
                    href="https://r3b311i0n.github.io/public/r3b311i0n.asc"
                >
                    <sup>PGP</sup>
                </a>
            </span>
            <div className="about-me-information">
                <div className="about-me-properties">
                    <div>Editors{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li><a rel="noopener" href="https://neovim.io" target="_blank">NeoVim</a></li>
                            <li><a rel="noopener" href="https://www.sublimetext.com" target="_blank">Sublime{'\u0020'}Text</a>
                            </li>
                            <li><a rel="noopener" href="https://code.visualstudio.com/"
                                   target="_blank">Visual{'\u0020'}Studio{'\u0020'}Code</a>
                            </li>
                        </ul>
                    </div>
                    <div>Graphics{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li><a href="https://affinity.serif.com/en-gb/"
                                   target="_blank" rel="noopener">Affinity{'\u0020'}Designer</a></li>
                            <li><a href="http://www.inkscape.org" target="_blank" rel="noopener">Inkscape</a></li>
                            <li><a href="https://krita.org/en/" target="_blank" rel="noopener">Krita</a></li>
                            <li><a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener">Photoshop</a>
                            </li>
                        </ul>
                    </div>
                    <div>IDE{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.jetbrains.com/idea/"
                                   rel="noopener">IntelliJ{'\u0020'}Idea</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.visualstudio.com" rel="noopener">Visual{'\u0020'}Studio</a>
                            </li>
                        </ul>
                    </div>
                    <div>Languages{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.wikiwand.com/en/C_Sharp_(programming_language)"
                                    rel="noopener"
                                >C#
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.wikiwand.com/en/Java_(programming_language)"
                                    rel="noopener"
                                >
                                    Java
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener" href="https://www.wikiwand.com/en/JavaScript">JavaScript</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener" href="https://www.wikiwand.com/en/PHP">PHP</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener"
                                   href="https://www.wikiwand.com/en/Python_(programming_language)">Python</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener" href="https://www.wikiwand.com/en/TypeScript">TypeScript</a>
                            </li>
                        </ul>
                    </div>
                    <div>OS{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li>Linux{'\u0020'}⟶{'\u0020'}
                                <a target="_blank" rel="noopener"
                                   href="https://www.archlinux.org">Arch{'\u0020'}Linux</a>,{'\u0020'}
                                <a target="_blank" rel="noopener" href="https://www.ubuntu.com/desktop">Ubuntu</a>
                            </li>
                            <li>Windows{'\u0020'}⟶{'\u0020'}
                                <a
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.microsoft.com/en-us/windows/features"
                                >
                                    Windows{'\u0020'}10
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about-me-properties">
                    <div>
                        Anime{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Watching{'\u0020'}⟶{'\u0020'}<span>
                            {currAnime}
                        </span></sup>
                        <ul>
                            <li>
                                <a
                                    rel="noopener"
                                    href="https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch"
                                    target="_blank"
                                >
                                    Code{'\u0020'}Geass
                                </a>
                            </li>
                            <li><a rel="noopener" href="https://myanimelist.net/anime/227/FLCL" target="_blank">FLCL</a>
                            </li>
                            <li><a rel="noopener" href="https://myanimelist.net/anime/918/Gintama" target="_blank">Gintama</a>
                            </li>
                            <li><a rel="noopener" href="https://myanimelist.net/anime/245/Great_Teacher_Onizuka"
                                   target="_blank">
                                Great{'\u0020'}Teacher{'\u0020'}Onizuka
                            </a></li>
                            <li><a rel="noopener" href="https://myanimelist.net/anime/19/Monster" target="_blank">Monster</a>
                            </li>
                            <li>
                                <a rel="noopener" href="https://myanimelist.net/anime/30/Neon_Genesis_Evangelion"
                                   target="_blank">
                                    Neon{'\u0020'}Genesis{'\u0020'}Evangelion
                                </a>
                            </li>
                            <li>
                                <a rel="noopener" href="https://myanimelist.net/anime/1210/NHK_ni_Youkoso"
                                   target="_blank">
                                    Welcome{'\u0020'}to{'\u0020'}the{'\u0020'}NHK
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>Books{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Reading{'\u0020'}⟶{'\u0020'}<span>
                        {currBook}
                        </span></sup>
                        <ul>
                            <li>A{'\u0020'}Song{'\u0020'}of{'\u0020'}Ice{'\u0020'}and{'\u0020'}Fire{'\u0020'}⟶{'\u0020'}<a
                                href="https://www.goodreads.com/book/show/13496.A_Game_of_Thrones"
                                target="_blank"
                                rel="noopener"
                            >1
                            </a>,{'\u0020'}
                                <a
                                    href="https://www.goodreads.com/book/show/10572.A_Clash_of_Kings?ac=1&from_search=true"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    2
                                </a>
                            </li>
                            <li><a rel="noopener" target="_blank"
                                   href="https://www.goodreads.com/book/show/234225.Dune">Dune</a></li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.goodreads.com/series/45175-harry-potter"
                                    rel="noopener"
                                >
                                    Harry{'\u0020'}Potter
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener"
                                   href="https://www.goodreads.com/book/show/24280.Les_Mis_rables">
                                    Les{'\u0020'}Misérables
                                </a>
                            </li>
                            <li><a target="_blank" rel="noopener"
                                   href="https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings">
                                The{'\u0020'}Lord{'\u0020'}of{'\u0020'}the{'\u0020'}Rings
                            </a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="https://www.goodreads.com/series/49075-the-stormlight-archive">
                                The{'\u0020'}Stormlight{'\u0020'}Archive
                            </a></li>
                            <li><a target="_blank" rel="noopener" href="https://myanimelist.net/manga/656/Vagabond">Vagabond</a>
                            </li>
                            <li><a target="_blank" rel="noopener" href="https://myanimelist.net/manga/104/Yotsuba_to">Yotsuba{'\u0020'}to!</a>
                            </li>
                        </ul>
                    </div>
                    <div>Football{'\u0020'}⟶{'\u0020'}
                        <span><a target="_blank" rel="noopener" href="https://www.acmilan.com/en">
                        AC{'\u0020'}Milan
                        </a></span>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/amalkarunarathna-353b0.appspot.com/o/AC_Milan.svg?alt=media&token=6a8c8e66-e961-4988-a38b-9e1fbf192730"
                            alt="AC Milan"
                            height={23}
                            width={14}
                        />
                    </div>
                    <div>Games{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Playing{'\u0020'}⟶{'\u0020'}<span>
                        {currGame}
                        </span></sup>
                        <ul>
                            <li><a
                                href="http://store.steampowered.com/app/49520/Borderlands_2/"
                                target="_blank"
                                rel="noopener"
                            >
                                Borderlands{'\u0020'}2
                            </a>
                            </li>
                            <li>Dark{'\u0020'}Souls{'\u0020'}⟶{'\u0020'}<a
                                href="http://store.steampowered.com/app/211420/DARK_SOULS_Prepare_To_Die_Edition/"
                                target="_blank"
                                rel="noopener"
                            >1
                            </a>,{'\u0020'}
                                <a
                                    href="http://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    2
                                </a>
                            </li>
                            <li><a
                                href="http://store.steampowered.com/app/367500/Dragons_Dogma_Dark_Arisen"
                                target="_blank"
                                rel="noopener"
                            >
                                Dragon’s{'\u0020'}Dogma:{'\u0020'}Dark{'\u0020'}Arisen
                            </a></li>
                            <li><a
                                href="http://store.steampowered.com/app/236850/Europa_Universalis_IV"
                                target="_blank"
                                rel="noopener"
                            >
                                Europa{'\u0020'}Universalis{'\u0020'}IV
                            </a></li>
                            <li><a rel="noopener" href="https://www.wikiwand.com/en/Klondike_(solitaire)"
                                   target="_blank">Klondike</a>
                            </li>
                            <li><a
                                href="http://megamitensei.wikia.com/wiki/Shin_Megami_Tensei_III:_Nocturne"
                                target="_blank"
                                rel="noopener"
                            >
                                MegaTen{'\u0020'}3:{'\u0020'}Nocturne
                            </a></li>
                            <li>Persona{'\u0020'}⟶{'\u0020'}
                                <a rel="noopener" href="http://megamitensei.wikia.com/wiki/Persona_3"
                                   target="_blank">3</a>,{'\u0020'}
                                <a rel="noopener" href="http://megamitensei.wikia.com/wiki/Persona_4"
                                   target="_blank">4</a>
                            </li>
                        </ul>
                    </div>
                    <div>Movies{'\u0020'}<sub>⮧</sub>
                        <ul>
                            <li><a
                                target="_blank"
                                rel="noopener"
                                href="http://www.imdb.com/title/tt0266308/"
                            >Battle{'\u0020'}Royale
                            </a>
                            </li>
                            <li>Crows{'\u0020'}Zero{'\u0020'}⟶{'\u0020'}
                                <a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt1016290">1</a>,{'\u0020'}
                                <a target="_blank" rel="noopener" href="http://www.imdb.com/title/tt1232831">2</a>
                            </li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt0137523/">Fight{'\u0020'}Club</a>
                            </li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt0110912/">Pulp{'\u0020'}Fiction</a>
                            </li>
                            <li>The{'\u0020'}Godfather{'\u0020'}⟶{'\u0020'}
                                <a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt0068646/">1</a>,{'\u0020'}
                                <a target="_blank" rel="noopener" href="http://www.imdb.com/title/tt0071562/">2</a>
                            </li>
                            <li><a target="_blank" rel="noopener" href="http://www.lordoftherings.net">The Lord of the
                                Rings</a></li>
                        </ul>
                    </div>
                    <div>
                        Music{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Listening{'\u0020'}To{'\u0020'}⟶{'\u0020'}<span>
                        {currMusic}
                        </span></sup>
                        <ul>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.arcadefire.com">Arcade{'\u0020'}Fire</a></li>
                            <li><a target="_blank" rel="noopener" href="http://bjork.com">Björk</a></li>
                            <li><a target="_blank" rel="noopener" href="http://www.blur.co.uk">Blur</a></li>
                            <li><a target="_blank" rel="noopener" href="http://www.gorillaz.com">Gorillaz</a></li>
                            <li><a target="_blank" rel="noopener" href="http://www.grimesmusic.com">Grimes</a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://lanadelrey.com">Lana{'\u0020'}Del{'\u0020'}Rey</a></li>
                            <li><a target="_blank" rel="noopener" href="https://lorde.co.nz">Lorde</a></li>
                            <li><a target="_blank" rel="noopener" href="https://www.mybloodyvalentine.org">My{'\u0020'}Bloody{'\u0020'}Valentine</a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener"
                                    href="http://www.mychemicalromance.com"
                                >
                                    My{'\u0020'}Chemical{'\u0020'}Romance
                                </a>
                            </li>
                            <li><a target="_blank" rel="noopener" href="http://www.oasisinet.com">Oasis</a></li>
                            <li><a target="_blank" rel="noopener" href="http://www.paramore.net/">Paramore</a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.pinkfloyd.com">Pink{'\u0020'}Floyd</a></li>
                            <li><a target="_blank" rel="noopener" href="https://www.radiohead.com">Radiohead</a></li>
                            <li><a target="_blank" rel="noopener" href="http://www.remhq.com">R.E.M.</a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://solarfields.com">Solar{'\u0020'}Fields</a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="https://stellardrone.bandcamp.com">Stellardrone</a></li>
                            <li><a target="_blank" rel="noopener" href="http://www.theclash.com">The{'\u0020'}Clash</a>
                            </li>
                            <li><a target="_blank" rel="noopener" href="http://www.thelibertines.com">The{'\u0020'}Libertines</a>
                            </li>
                            <li><a target="_blank" rel="noopener" href="http://www.theverveonline.com">The{'\u0020'}Verve</a>
                            </li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.whitestripes.com">The{'\u0020'}White{'\u0020'}Stripes</a>
                            </li>
                            <li><a target="_blank" rel="noopener" href="http://vocaloid.wikia.com/wiki/Vocaloid_Wiki">Vocaloid</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        TV{'\u0020'}<sub>⮧</sub>{'\u0020'}<sup>Currently{'\u0020'}Watching{'\u0020'}⟶{'\u0020'}<span>
                        {currTV}
                        </span></sup>
                        <ul>
                            <li><a target="_blank"
                                   rel="noopener"
                                   href="http://www.imdb.com/title/tt1702042">An{'\u0020'}Idiot{'\u0020'}Abroad</a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt0903747">Breaking{'\u0020'}Bad</a>
                            </li>
                            <li><a target="_blank" rel="noopener" href="http://www.imdb.com/title/tt0445114">Extras</a>
                            </li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt2100976">Impractical{'\u0020'}Jokers</a>
                            </li>
                            <li><a target="_blank" rel="noopener" href="http://www.imdb.com/title/tt0380136">QI</a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.adultswim.com/videos/rick-and-morty">Rick{'\u0020'}and{'\u0020'}Morty</a>
                            </li>
                            <li><a target="_blank"
                                   rel="noopener"
                                   href="http://www.imdb.com/title/tt4574334">Stranger{'\u0020'}Things</a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt0290978">The{'\u0020'}Office</a>
                            </li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt0306414">The{'\u0020'}Wire</a></li>
                            <li><a target="_blank" rel="noopener"
                                   href="http://www.imdb.com/title/tt1514753/">Three{'\u0020'}Kingdoms</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutMe;
