import * as React from 'react';
import {presets, spring, StaggeredMotion} from 'react-motion';
import './social.pcss';
import SocialIcon from './stateless-components/social-icon';

//    Social links component.

// Seven objects for seven social links representing initial x coordinates.
const defaultStyles = [{h: -768}, {h: -768}, {h: -768}, {h: -768}, {h: -768}, {h: -768}, {h: -768}];

const staggerStyles = (prevInterpolatedStyles: any) => prevInterpolatedStyles.map((_: { h: number }, i: number) => {
    return i === 0
        ? {h: spring(0, presets.stiff)}
        : {h: spring(prevInterpolatedStyles[i - 1].h)};
});

export default class Social extends React.Component<{}, {}> {
    constructor(props: any) {
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
                                    <div className="social-icon" style={{transform: `translateX(${style.h}px)`}}>
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
