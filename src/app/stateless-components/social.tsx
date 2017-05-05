import * as React from 'react';
import CodepenIcon from './codepen-icon';
import DribbbleIcon from './dribbble-icon';
import GitHubIcon from './github-icon';
import GooglePlusIcon from './google-plus-icon';
import LinkedInIcon from './linked-in-icon';
import MediumIcon from './medium-icon';
import './social.css';
import TwitterIcon from './twitter-icon';

//    Stateless social links component.
// todo: Fix responsive design.
const Social = () => {
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
};

export default Social;
