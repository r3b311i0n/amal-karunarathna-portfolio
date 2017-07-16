import * as React from 'react';
import DisqusThread from 'react-disqus-comments';

export interface IDisqusProps {
    id: string;
    title: string;
    url: string;
}

export class Disqus extends React.Component <IDisqusProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <DisqusThread
                shortname="r3b311i0n"
                identifier={this.props.id}
                title={this.props.title}
            />
        );
    }
}
