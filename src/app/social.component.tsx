import * as React from 'react';
import GitHubIcon from './stateless-components/github-icon';
import GoogleIcon from './stateless-components/google-icon';

export class Social extends React.Component<any, void> {
    constructor(props: any) {
        super(props);
    }

//    Social links presentational-component.

    public render(): JSX.Element {
        return (
            <div>
                <GitHubIcon/>
                <GoogleIcon/>
            </div>
        );
    }
}
