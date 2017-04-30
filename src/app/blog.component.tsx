import * as React from 'react';
import './blog.component.css';
import BlogLink from './stateless-components/blog-link';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', 'font-size': '1.333em'};
const inactive = {color: 'inherit', 'font-size': '1em'};

const blogTest = {name: 'Meth is GREAT!', tags: ['drugs', 'meth', 'poverty', 'white trash']};

export class Blog extends React.Component<void, void> {
    constructor(props: any) {
        super(props);
    }

//    Blog article presentational-component.

    public render(): JSX.Element {
        return (
            <div>
                <div className="blog-content">
                    <main>
                        {BlogLink(blogTest.name, blogTest.tags)}
                    </main>
                </div>
                <aside>{NavBar(inactive, active, inactive, inactive)}</aside>
            </div>
        );
    }
}
