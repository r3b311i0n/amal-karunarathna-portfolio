import * as React from 'react';
import {Motion, presets, spring} from 'react-motion';
import './blog.component.pcss';
import BlogLink from './stateless-components/blog-link';
import NavMenu from './stateless-components/nav-menu';

// todo: Scrollable blog link list.

const active = {color: 'rgba(0, 0, 0, 1)', fontSize: '1.333em'};
const inactive = {color: 'inherit', fontSize: '1em'};

const blogIndexTest = {
    Cocaine: {name: 'Cocaine for the rich.', tags: ['drugs']},
    Meth: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']}
};

const methArticle = {
    body: {
        para1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam consectetur cumque deleniti deserunt dolore doloribus ducimus facere in itaque laudantium mollitia, nemo obcaecati perspiciatis quidem quos sed sunt ullam!'
    },
    header: 'Meth is the Greatest Thing Ever!'
};

interface IBlogState {
    article: string;
    header: string;
    willAnimateIn: boolean;
}

export class Blog extends React.Component<void, IBlogState> {
    constructor(props: any) {
        super(props);

        this.state = {
            article: '',
            header: '',
            willAnimateIn: false
        };
    }

//    Blog article presentational-component.

    private componentDidMount() {
        // this.setState({willAnimateIn: true});
    }

    private handleBlogLinkMouseDown = (key: string): any => {
        console.log(key);
        this.setState({article: methArticle.body.para1, header: methArticle.header, willAnimateIn: true});
    };

    public render(): JSX.Element {
        return (
            <div className="blog-root">
                <div>
                    <aside>
                        <div className="blog-link-list">
                            {Object.entries(blogIndexTest).map(([key, value]) => (
                                <div
                                    key={key}
                                    onClick={() => this.handleBlogLinkMouseDown(key)}
                                >{BlogLink(value.name, value.tags)}
                                </div>))}
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
                                <h1>{this.state.header}</h1>
                                <p>{this.state.article}</p>
                            </div>}
                        </Motion>
                    </main>
                </div>
                {NavMenu(inactive, active, inactive, inactive)}
            </div>
        );
    }
}
