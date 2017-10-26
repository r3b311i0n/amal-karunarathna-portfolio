import * as React from 'react';

import CodePenIcon from './codepen-icon';
import DribbbleIcon from './dribbble-icon';
import GitHubIcon from './github-icon';
import GooglePlusIcon from './google-plus-icon';
import LinkedInIcon from './linked-in-icon';
import MediumIcon from './medium-icon';
import './social-icon.pcss';
import TwitterIcon from './twitter-icon';

// Social links put in an array for StaggeredMotion animation.

const SocialIcon = [(
    <div className="social-icon">
        <a
            href="https://codepen.io/r3b311i0n"
            target="_blank"
            title="CodePen"
            rel="noopener"
        >
            <CodePenIcon/>
        </a>
    </div>
), (
    <div className="social-icon">
        <a
            href="https://dribbble.com/r3b311i0n"
            target="_blank"
            title="Dribbble"
            rel="noopener"
        >
            <DribbbleIcon/>
        </a>
    </div>
), (
    <div className="social-icon">
        <a
            href="https://github.com/r3b311i0n"
            target="_blank"
            title="GitHub"
            rel="noopener"
        >
            <GitHubIcon/>
        </a>
    </div>
), (
    <div className="social-icon">
        <a
            href="https://plus.google.com/u/0/+AmalKarunarathna"
            target="_blank"
            title="Google +"
            rel="noopener"
        >
            <GooglePlusIcon/>
        </a>
    </div>
), (
    <div className="social-icon">
        <a
            href="https://www.linkedin.com/in/amal-karunarathna-59196a85"
            target="_blank"
            title="LinkedIn"
            rel="noopener"
        >
            <LinkedInIcon/>
        </a>
    </div>
), (
    <div className="social-icon">
        <a
            href="https://medium.com/@r3b311i0n"
            target="_blank"
            title="Medium"
            rel="noopener"
        >
            <MediumIcon/>
        </a>
    </div>
), (
    <div className="social-icon">
        <a
            href="https://twitter.com/r3b311i0n"
            target="_blank"
            title="Twitter"
            rel="noopener"
        >
            <TwitterIcon/>
        </a>
    </div>
),
];

export default SocialIcon;
