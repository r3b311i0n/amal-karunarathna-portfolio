import * as React from 'react';
import './social.component.css';
import CodepenIcon from './stateless-components/codepen-icon';
import DribbbleIcon from './stateless-components/dribbble-icon';
import GitHubIcon from './stateless-components/github-icon';
import GooglePlusIcon from './stateless-components/google-plus-icon';
import LinkedInIcon from './stateless-components/linked-in-icon';
import MediumIcon from './stateless-components/medium-icon';
import TwitterIcon from './stateless-components/twitter-icon';

export class Social extends React.Component<{}, void> {
    constructor(props: any) {
        super(props);
    }

//    Social links presentational-component.

    public render(): JSX.Element {
        return (
            <div className="social-root">
                <span className="social-icon">
                    <a href="#" target="_blank" title="CodePen">
                        <CodepenIcon/>
                    </a>
                </span>
                <span className="social-icon">
                    <a href="#" target="_blank" title="Dribbble">
                        <DribbbleIcon/>
                    </a>
                </span>
                <span className="social-icon">
                    <a href="https://github.com/r3b311i0n" target="_blank" title="GitHub">
                        <GitHubIcon/>
                    </a>
                </span>
                <span className="social-icon">
                    <a href="https://plus.google.com/u/0/+AmalKarunarathna" target="_blank" title="Google +">
                        <GooglePlusIcon/>
                    </a>
                </span>
                <span className="social-icon">
                    <a href="https://www.linkedin.com/in/amal-karunarathna-59196a85" target="_blank" title="LinkedIn">
                        <LinkedInIcon/>
                    </a>
                </span>
                <span className="social-icon">
                    <a href="https://medium.com/@r3b311i0n" target="_blank" title="Medium">
                        <MediumIcon/>
                    </a>
                </span>
                <span className="social-icon">
                    <a href="https://twitter.com/r3b311i0n" target="_blank" title="Twitter">
                        <TwitterIcon/>
                    </a>
                </span>
            </div>
        );
    }
}
