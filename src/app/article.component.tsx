import * as firebase from 'firebase';
import * as React from 'react';
import {Motion, OpaqueConfig, presets, spring} from 'react-motion';
import './article.component.pcss';

// todo: Give better names for routes.

const database = firebase.database();

export interface IArticleProps {
    articleAddress: string;
    articleHeading: string;
}

interface IArticleState {
    articleBody: string;
    articleHeading: string;
    articleStyle: { alpha: OpaqueConfig | number, y: OpaqueConfig | number };
}

export class Article extends React.Component<IArticleProps, IArticleState> {
    constructor(props: any) {
        super(props);

        this.state = {
            articleBody: '',
            articleHeading: '',
            articleStyle: {
                alpha: 0,
                y: -200
            }
        };
    }

    private static readonly articleDefaultStyle = {
        alpha: 0,
        y: -200
    };

    public async componentDidMount() {
        await database.ref(this.props.articleAddress + '/').once('value').then((snapshot) => {
            this.setState({
                articleBody: snapshot.val(),
                articleHeading: this.props.articleHeading,
                articleStyle: {
                    alpha: spring(1, presets.gentle),
                    y: spring(0, presets.gentle)
                }
            });
        });
    }

    public render() {
        return (
            <div className="blog-article">
                <Motion
                    defaultStyle={Article.articleDefaultStyle}
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
                    defaultStyle={Article.articleDefaultStyle}
                    style={this.state.articleStyle}
                >
                    {(interpolation: any) => <div
                        style={{
                            opacity: interpolation.alpha,
                            transform: `translateY(${interpolation.y}px)`
                        }}
                    >
                        <div dangerouslySetInnerHTML={{__html: this.state.articleBody}}/>
                    </div>}
                </Motion>
            </div>
        );
    }
}
