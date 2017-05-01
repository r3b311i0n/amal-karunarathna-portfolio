import * as React from 'react';
import './social.component.css';
import GitHubIcon from './stateless-components/github-icon';
import GooglePlusIcon from './stateless-components/google-plus-icon';
import TwitterIcon from './stateless-components/twitter-icon';

export class Social extends React.Component<any, void> {
    constructor(props: any) {
        super(props);
    }

//    Social links presentational-component.

    public render(): JSX.Element {
        return (
            <div className="social-root">
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
                    <a href="https://twitter.com/r3b311i0n" target="_blank" title="Twitter">
                        <TwitterIcon/>
                    </a>
                </span>
            </div>
        );
    }
}
