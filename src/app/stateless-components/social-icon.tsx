import * as React from 'react';
import CodePenIcon from './codepen-icon';
import DribbbleIcon from './dribbble-icon';
import GitHubIcon from './github-icon';
import GooglePlusIcon from './google-plus-icon';
import LinkedInIcon from './linked-in-icon';
import MediumIcon from './medium-icon';
import TwitterIcon from './twitter-icon';

// Social links put in an array for StaggeredMotion animation.

const SocialIcon = [(
    <a href="https://codepen.io/r3b311i0n" target="_blank" title="CodePen">
        <CodePenIcon/>
    </a>
), (
    <a href="https://dribbble.com/r3b311i0n" target="_blank" title="Dribbble">
        <DribbbleIcon/>
    </a>
), (
    <a href="https://github.com/r3b311i0n" target="_blank" title="GitHub">
        <GitHubIcon/>
    </a>
), (
    <a href="https://plus.google.com/u/0/+AmalKarunarathna" target="_blank" title="Google +">
        <GooglePlusIcon/>
    </a>
), (
    <a href="https://www.linkedin.com/in/amal-karunarathna-59196a85" target="_blank" title="LinkedIn">
        <LinkedInIcon/>
    </a>
), (
    <a href="https://medium.com/@r3b311i0n" target="_blank" title="Medium">
        <MediumIcon/>
    </a>
), (
    <a href="https://twitter.com/r3b311i0n" target="_blank" title="Twitter">
        <TwitterIcon/>
    </a>
)
];

export default SocialIcon;
