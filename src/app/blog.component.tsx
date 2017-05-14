import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import {Motion, presets, spring, StaggeredMotion} from 'react-motion';
import './blog.component.pcss';
import BlogLink from './stateless-components/blog-link';
import NavMenu from './stateless-components/nav-menu';

// todo: Scrollable blog link list.
// todo: Put all constants in in their own file.

const active = {color: 'rgba(0, 0, 0, 1)', fontSize: '1.333em'};
const inactive = {color: 'inherit', fontSize: '1em'};

const blogIndexTest = {
    Cocaine: {name: 'Cocaine for the rich', tags: ['drugs']},
    Cocaine2: {name: 'Cocaine for the rich', tags: ['drugs']},
    Cocaine3: {name: 'Cocaine for the rich', tags: ['drugs']},
    Heroine: {name: 'HARDCORE!!!', tags: ['drugs']},
    Heroine2: {name: 'HARDCORE!!!', tags: ['drugs']},
    Heroine3: {name: 'HARDCORE!!!', tags: ['drugs']},
    Meth: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']},
    Meth2: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']},
    Meth3: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']},
    Meth4: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']},
    Meth5: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']},
    Meth6: {name: 'Meth is for peasants', tags: ['drugs', 'meth', 'poverty', 'white trash']}
};

const cocaineArticle = {
    body: {
        para1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet corporis distinctio error itaque laboriosam molestias mollitia nisi officia perferendis placeat, quae quia quod, ratione reiciendis sit veniam? Quasi?'
    },
    header: 'Coke is love, Coke is life!'
};

const methArticle = {
    body: {
        para1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam consectetur cumque deleniti deserunt dolore doloribus ducimus facere in itaque laudantium mollitia, nemo obcaecati perspiciatis quidem quos sed sunt ullam!'
    },
    header: 'Meth is the Greatest Thing Ever!'
};

const staggerStyles = (prevInterpolatedStyles: any) => prevInterpolatedStyles.map((_: { h: number }, i: number) => {
    return i === 0
        ? {h: spring(0, presets.stiff)}
        : {h: spring(prevInterpolatedStyles[i - 1].h)};
});

interface IBlogState {
    article: string;
    articleDefaultStyle: any;
    articleStyle: any;
    header: string;
    willAnimateIn: boolean;
}

export class Blog extends React.Component<void, IBlogState> {
    constructor(props: any) {
        super(props);

        // Initialises blog entries.
        this.blogLinkList = Object.entries(blogIndexTest).map(([key, value]) => (
            <div
                key={key}
                onClick={() => this.handleBlogLinkClick(key)}
            >{BlogLink(value.name, value.tags)}
            </div>));

        this.state = {
            article: '',
            articleDefaultStyle: {
                alpha: 0,
                y: -200
            },
            articleStyle: {
                alpha: spring(1, presets.gentle),
                y: spring(0, presets.gentle)
            },
            header: '',
            willAnimateIn: false
        };

        this.blogLinkList.forEach(() => this.defaultStyles.push({h: -640}));
    }

//    Blog article presentational-component.

    private blogLinkList: JSX.Element[];
    private defaultStyles: Array<{ h: number }> = [];

    private componentDidMount() {
        // Animate in latest article.
        this.setState({article: methArticle.body.para1, header: methArticle.header, willAnimateIn: true});
    }

    private handleBlogLinkClick = async (key: string): Promise<any> => {
        // Transition-out previous article.
        await new Promise((resolve) => {
            this.setState({
                articleDefaultStyle: {
                    alpha: 1,
                    y: 0
                },
                articleStyle: {
                    alpha: spring(0, presets.gentle),
                    y: spring(-200, presets.gentle)
                }
            });

            window.setTimeout(() => resolve(), 500);
        });
        // Transition-in new article.
        this.setState({
            articleDefaultStyle: {
                alpha: 0,
                y: -200
            },
            articleStyle: {
                alpha: spring(1, presets.gentle),
                y: spring(0, presets.gentle)
            }
        });
        (key === 'Cocaine') ?
            this.setState({
                article: cocaineArticle.body.para1,
                header: cocaineArticle.header,
                willAnimateIn: true
            }) :
            this.setState({article: methArticle.body.para1, header: methArticle.header, willAnimateIn: true});

        // this.handleTagSort();
    };

    // private handleTagSort = (tag: string): any => {
    //     let linkList: JSX.Element[] = [];
    //
    //     Object.entries(blogIndexTest).map(([key, value]) => {
    //         if (value.tags.includes(tag)) {
    //             linkList.push((
    //                 <div
    //                     key={key}
    //                     onClick={() => this.handleBlogLinkClick(key)}
    //                 >{BlogLink(value.name, value.tags)}
    //                 </div>));
    //         }
    //     });
    //
    //     this.setState({blogLinkList: linkList});
    // };

    public render(): JSX.Element {
        return (
            <div className="blog-root">
                <div>
                    <aside>
                        <div className="blog-link-list">
                            <Scrollbars
                                autoHeight={true}
                                autoHeightMin={100}
                                autoHeightMax={window.innerHeight}
                                autoHide={true}
                                autoHideDuration={200}
                                autoHideTimeout={1000}
                            >
                                <StaggeredMotion
                                    defaultStyles={this.defaultStyles}
                                    styles={staggerStyles}
                                >
                                    {(interpolatingStyles: object[]) =>
                                        <div>
                                            {interpolatingStyles.map((style: { h: number }, i: number) =>
                                                <div key={i}>
                                                    <div
                                                        style={{transform: `translateX(${style.h}px)`}}
                                                    >
                                                        {this.blogLinkList[i]}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    }
                                </StaggeredMotion>
                            </Scrollbars>
                        </div>
                    </aside>
                    <main>
                        <Motion
                            defaultStyle={this.state.articleDefaultStyle}
                            style={this.state.articleStyle}
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
