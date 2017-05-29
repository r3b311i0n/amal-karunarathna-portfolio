import * as firebase from 'firebase';
import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import {presets, spring, StaggeredMotion} from 'react-motion';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import {Article} from './article.component';
import './blog.component.pcss';
import BlogLink from './stateless-components/blog-link';

// todo: Put all constants in in their own file.

const database = firebase.database();

const staggerStyles = (prevInterpolatedStyles: any) => prevInterpolatedStyles.map((_: { h: number }, i: number) => {
    return i === 0
        ? {h: spring(0, presets.stiff)}
        : {h: spring(prevInterpolatedStyles[i - 1].h)};
});

interface IBlogState {
    articleRoutes: JSX.Element[];
    willAnimateInBlogLinkList: boolean;
    windowHeight: number;
}

export class Blog extends React.Component<void, IBlogState> {
    constructor(props: any) {
        super(props);
        this.state = {
            articleRoutes: [],
            willAnimateInBlogLinkList: false,
            windowHeight: window.innerHeight
        };
        this.setWindowHeight = this.setWindowHeight.bind(this);
    }

//    Blog article component.

    private blogLinkList: JSX.Element[];
    private defaultStyles: Array<{ h: number }> = [];
    private index: any;

    private setWindowHeight(): void {
        this.setState({windowHeight: window.innerHeight});
    }

    private fetchIndex(): Promise<{}> {
        return new Promise((resolve) => {
            const indexRef = database.ref('index/');
            // Fetch index.
            indexRef.once('value').then((snapshot) => {
                this.index = snapshot.val();
                const routes: JSX.Element[] = [];
                this.blogLinkList = Object.entries(this.index).map(([key, value]) => {
                    // Initialise and array of routes.
                    //noinspection TsLint
                    routes.push((
                            <Route
                                key={key}
                                path={`/${key}`}
                                render={() =>
                                    <Article articleAddress={value.article} articleHeading={value.header}/>}
                            />
                        )
                    );

                    // Initialises blog entries.
                    return (
                        <div
                            key={key}
                        >
                            <Link
                                key={key}
                                to={key}
                            >
                                {BlogLink(value.header, value.tags.split(','))}
                            </Link>
                        </div>);
                });
                // Sort blog list from older to newer posts.
                this.blogLinkList = this.blogLinkList.reverse();
                // Add redirect to last post.
                routes.push(<Redirect key={routes.length + 1} from="/" to={`/${routes.length}`}/>);
                // Populate render() with Route list.
                this.setState({articleRoutes: routes});
                // Push style objects into array for StaggerMotion of Blog List.
                this.blogLinkList.forEach(() => this.defaultStyles.push({h: -640}));
                this.setState({
                    willAnimateInBlogLinkList: true
                });
            });
            resolve();
        });
    }

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
                                </StaggeredMotion> : <div/>}
                            </Scrollbars>
                        </div>
                    </aside>
                    <main>
                        <Switch>{this.state.articleRoutes}</Switch>
                    </main>
                </div>
            </div>
        );
    }
}
