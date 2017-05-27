import * as firebase from 'firebase';
import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import {Motion, presets, spring, StaggeredMotion} from 'react-motion';
import './blog.component.pcss';
import BlogLink from './stateless-components/blog-link';

// todo: Put all constants in in their own file.
// todo: shrink Blog List for small screens.
// todo: Animate heading separately.
// todo: Maybe remove routing.

const database = firebase.database();

const staggerStyles = (prevInterpolatedStyles: any) => prevInterpolatedStyles.map((_: { h: number }, i: number) => {
    return i === 0
        ? {h: spring(0, presets.stiff)}
        : {h: spring(prevInterpolatedStyles[i - 1].h)};
});

interface IBlogState {
    articleBody: string;
    articleDefaultStyle: any;
    articleStyle: any;
    articleHeading: string;
    willAnimateInBlogLinkList: boolean;
    windowHeight: number;
}

export class Blog extends React.Component<{}, IBlogState> {
    constructor(props: any) {
        super(props);
        this.state = {
            articleBody: '',
            articleDefaultStyle: {
                alpha: 0,
                y: -200
            },
            articleHeading: '',
            articleStyle: {
                alpha: 0,
                y: -200
            },
            willAnimateInBlogLinkList: false,
            windowHeight: window.innerHeight
        };
        this.setWindowHeight = this.setWindowHeight.bind(this);
    }

//    Blog article component.

    private static blogLinkList: JSX.Element[];
    private static defaultStyles: Array<{ h: number }> = [];
    private static index: any;

    private setWindowHeight(): void {
        this.setState({windowHeight: window.innerHeight});
    }

    private fetchIndex(): Promise<{}> {
        return new Promise((resolve) => {
            const indexRef = database.ref('index/');
            // Fetch index.
            indexRef.once('value').then((snapshot) => {
                Blog.index = snapshot.val();
                // Initialises blog entries.
                Blog.blogLinkList = Object.entries(Blog.index).map(([key, value]) => (
                    <div
                        key={key}
                        onClick={() => this.handleBlogLinkClick(value.article, value.header)}
                    >
                        {BlogLink(value.header, value.tags.split(','))}
                    </div>));
                // Push style objects into array for StaggerMotion of Blog List.
                Blog.blogLinkList.forEach(() => Blog.defaultStyles.push({h: -640}));
                // Fetch latest article using blog index length.
                database.ref(Blog.index[Blog.index.length - 1].article.toString())
                    .once('value').then((articleSnapshot) =>
                    // Animate in latest article.
                    this.setState({
                        articleBody: articleSnapshot.val(),
                        articleHeading: Blog.index[Blog.index.length - 1].header,
                        articleStyle: {
                            alpha: spring(1, presets.gentle),
                            y: spring(0, presets.gentle)
                        },
                        willAnimateInBlogLinkList: true
                    }));
            }).catch((err) => this.setState({articleBody: err.message, articleHeading: err.name}));
            resolve();
        });
    }

    private handleBlogLinkClick = async (article: string, header: string): Promise<any> => {
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
        database.ref(article).once('value').then((snapshot) => {
            this.setState({
                articleBody: snapshot.val(),
                articleDefaultStyle: {
                    alpha: 0,
                    y: -200
                },
                articleHeading: header.toString(),
                articleStyle: {
                    alpha: spring(1, presets.gentle),
                    y: spring(0, presets.gentle)
                }
            });
        }).catch((err) => this.setState({articleHeading: err.message}));
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

    public async componentDidMount() {
        await this.fetchIndex();
        window.addEventListener('resize', this.setWindowHeight);
    }

    //noinspection JSMethodCanBeStatic
    public componentWillUnmount() {
        window.removeEventListener('resize', this.setWindowHeight);
    }

    public render(): JSX.Element {
        return (
            <div>
                <div>
                    <aside>
                        <div className="blog-link-list">
                            <Scrollbars
                                autoHeight={true}
                                autoHeightMin={100}
                                autoHeightMax={this.state.windowHeight}
                                autoHide={true}
                                autoHideDuration={200}
                                autoHideTimeout={1000}
                            >
                                {this.state.willAnimateInBlogLinkList ? <StaggeredMotion
                                    defaultStyles={Blog.defaultStyles}
                                    styles={staggerStyles}
                                >
                                    {(interpolatingStyles: object[]) =>
                                        <div>
                                            {interpolatingStyles.map((style: { h: number }, i: number) =>
                                                <div key={i}>
                                                    <div
                                                        style={{transform: `translateX(${style.h}px)`}}
                                                    >
                                                        {Blog.blogLinkList[i]}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    }
                                </StaggeredMotion> : <div/>}
                            </Scrollbars>
                        </div>
                    </aside>
                    <main>
                        <div className="blog-article">
                            <Motion
                                defaultStyle={this.state.articleDefaultStyle}
                                style={this.state.articleStyle}
                            >
                                {(interpolation: any) => <div
                                    style={{
                                        opacity: interpolation.alpha,
                                        transform: `translateX(${-interpolation.y}px)`
                                    }}
                                >
                                    <h1 className="blog-article-heading">{this.state.articleHeading}</h1>
                                </div>}
                            </Motion>
                            <Motion
                                defaultStyle={this.state.articleDefaultStyle}
                                style={this.state.articleStyle}
                            >
                                {(interpolation: any) => <div
                                    style={{
                                        opacity: interpolation.alpha,
                                        transform: `translateY(${interpolation.y}px)`
                                    }}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{__html: this.state.articleBody}}
                                    />
                                </div>}
                            </Motion>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
