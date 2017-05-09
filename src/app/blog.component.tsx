import * as React from 'react';
import {Motion, presets, spring} from 'react-motion';
import './blog.component.css';
import BlogLink from './stateless-components/blog-link';
import NavBar from './stateless-components/nav-bar';

const active = {color: 'rgba(0, 0, 0, 1)', fontSize: '1.333em'};
const inactive = {color: 'inherit', fontSize: '1em'};

const blogTest = {
    Meth: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']}
};

const articleTest = {
    body: {
        para1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam consectetur cumque deleniti deserunt dolore doloribus ducimus facere in itaque laudantium mollitia, nemo obcaecati perspiciatis quidem quos sed sunt ullam!'
    },
    header: 'Meth is the Greatest Thing Ever!'
};

interface IBlogState {
    article: string;
    willAnimateIn: boolean;
}

export class Blog extends React.Component<void, IBlogState> {
    constructor(props: any) {
        super(props);

        window.addEventListener('onclick', this.handleBlogLinkMouseDown);

        this.state = {
            article: '',
            willAnimateIn: false
        };
    }

//    Blog article presentational-component.

    private componentDidMount() {
        // this.setState({willAnimateIn: true});
    }

    private handleBlogLinkMouseDown = (): any => {
        this.setState({article: articleTest.body.para1, willAnimateIn: true});
    };

    public render(): JSX.Element {
        return (
            <div className="blog-root">
                <div>
                    <aside>
                        <div onClick={this.handleBlogLinkMouseDown}>
                            {BlogLink(blogTest.Meth.name, blogTest.Meth.tags)}
                        </div>
                    </aside>
                    <main>
                        <Motion
                            style={{
                                alpha: this.state.willAnimateIn ?
                                    spring(1, presets.gentle) : spring(0, presets.gentle),
                                y: this.state.willAnimateIn ?
                                    spring(0, presets.gentle) : spring(-200, presets.gentle)
                            }}
                        >
                            {(interpolation: any) => <div
                                className="blog-article"
                                style={{
                                    opacity: interpolation.alpha,
                                    transform: `translateY(${interpolation.y}px)`
                                }}
                            >
                                <p>{this.state.article}</p>
                            </div>}
                        </Motion>
                    </main>
                </div>
                {NavBar(inactive, active, inactive, inactive)}
            </div>
        );
    }
}
