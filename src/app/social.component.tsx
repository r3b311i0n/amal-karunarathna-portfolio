import * as React from 'react';
import GoogleIcon from './stateless-components/google-icon';

export class Social extends React.Component<any, void> {
    constructor(props: any) {
        super(props);
    }

//    Social links presentational-component.

    public render(): JSX.Element {
        return (
            <div>
                <GoogleIcon/>
            </div>
        );
    }
}
