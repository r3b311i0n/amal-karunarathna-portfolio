import * as React from 'react';
import './blog.component.css';
import BlogLink from './stateless-components/blog-link';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
const inactive = {color: 'inherit', 'font-size': '1em'};

const blogTest = {
    Meth: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']}
};

export class Blog extends React.Component<void, void> {
    constructor(props: any) {
        super(props);
    }

//    Blog article presentational-component.

    public render(): JSX.Element {
        return (
            <div className="blog-root">
                <div>
                    <main>
                        {BlogLink(blogTest.Meth.name, blogTest.Meth.tags)}
                    </main>
                </div>
                {NavBar(inactive, active, inactive, inactive)}
            </div>
        );
    }
}
