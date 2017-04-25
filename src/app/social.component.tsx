import * as React from 'react';
import GoogleIcon from './stateless-components/google-icon';

export class Social extends React.Component<void, void> {
    constructor(props: any) {
        super(props);
    }

//    Social links container-component

    public render(): JSX.Element {
        return (
            <div>
                <GoogleIcon/>
            </div>
        );
    }
}
