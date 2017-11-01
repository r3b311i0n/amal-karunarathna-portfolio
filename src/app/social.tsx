import * as React from 'react';
import {presets, spring, StaggeredMotion} from 'react-motion';

import './social.pcss';
import SocialIcon from './stateless-components/social-icon';

//    Social links component.

// Seven objects for seven social links representing initial x coordinates.
const motionObject = {h: 0};
const defaultStyles = [motionObject, motionObject, motionObject, motionObject, motionObject, motionObject, motionObject];

const staggerStyles = (prevInterpolatedStyles: any) => prevInterpolatedStyles.map((_: { h: number }, i: number) => {
    return i === 0
        ? {h: spring(1, presets.gentle)}
        : {h: spring(prevInterpolatedStyles[i - 1].h)};
});

export default class Social extends React.Component<{}, {}> {
    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="social-root">
                <StaggeredMotion
                    defaultStyles={defaultStyles}
                    styles={staggerStyles}
                >
                    {(interpolatingStyles: object[]) =>
                        <div>
                            {interpolatingStyles.map((style: { h: number }, i: number) =>
                                <div key={i}>
                                    <div
                                        className="social-motion-block"
                                        style={{opacity: style.h}}
                                    >
                                        {SocialIcon[i]}
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </StaggeredMotion>
            </div>
        );
    }
}
