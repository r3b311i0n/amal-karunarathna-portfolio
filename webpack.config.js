const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const workboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
    if (env === 'dev') {
        return {
            context: path.resolve(__dirname, './'),

            entry: './src/index.dev.tsx',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
                publicPath: '/dist/'
            },

            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.pcss'],
                alias: {
                    'react': 'preact-compat',
                    'react-dom': 'preact-compat'
                }
            },

            devtool: 'source-map',

            module: {
                rules: [
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        loader: 'source-map-loader',
                        exclude: /node_modules/
                    },
                    {
                        enforce: 'pre',
                        test: /\.tsx?$/,
                        use: 'source-map-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.tsx?$/,
                        loader: 'awesome-typescript-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.pcss$/,
                        use: ExtractTextPlugin.extract(
                            {
                                fallback: 'style-loader',
                                use: [
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            importLoaders: 1,
                                            sourceMap: true
                                        }
                                    },
                                    {
                                        loader: 'postcss-loader',
                                        options: {
                                            config: {
                                                ctx: {
                                                    cssnext: {}
                                                }
                                            },
                                            sourceMap: true
                                        }
                                    }
                                ]
                            }
                        ),
                        exclude: /node_modules/
                    }
                ]
            },

            plugins: [
                new ExtractTextPlugin('styles.css'),
                new webpack.DefinePlugin({
                    'NODE_ENV': JSON.stringify('development')
                })
            ],

            externals: {
                'preact': 'preact',
                'firebase': 'firebase'
            },

            devServer: {
                contentBase: [
                    path.join(__dirname, 'public'),
                    path.join(__dirname, 'node_modules/preact/dist'),
                    path.join(__dirname, 'node_modules/firebase')
                ],
                compress: true,
                port: 4200,
                publicPath: '/dist/',
                historyApiFallback: true
            }
        };
    }
    else if (env === 'prod') {
        return {
            context: path.resolve(__dirname, './'),

            entry: './src/index.prod.tsx',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist/prod'),
                publicPath: '/dist/prod/'
            },

            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.pcss'],
                alias: {
                    'react': 'preact-compat',
                    'react-dom': 'preact-compat'
                }
            },

            devtool: 'source-map',

            module: {
                rules: [
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        loader: 'source-map-loader',
                        exclude: /node_modules/
                    },
                    {
                        enforce: 'pre',
                        test: /\.tsx?$/,
                        use: 'source-map-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.tsx?$/,
                        loader: 'awesome-typescript-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.pcss$/,
                        use: ExtractTextPlugin.extract(
                            {
                                fallback: 'style-loader',
                                use: [
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            importLoaders: 1,
                                            sourceMap: true,
                                            minimize: true
                                        }
                                    },
                                    {
                                        loader: 'postcss-loader',
                                        options: {
                                            config: {
                                                ctx: {
                                                    cssnext: {}
                                                }
                                            },
                                            sourceMap: true
                                        }
                                    }
                                ]
                            }
                        ),
                        exclude: /node_modules/
                    }
                ]
            },

            plugins: [
                new ExtractTextPlugin('styles.css'),
                new workboxPlugin({
                    globDirectory: 'dist/prod',
                    globPatterns: [
                        'bundle.js',
                        'styles.css'
                    ],
                    swDest: path.join(__dirname, 'dist/prod/sw.js')
                })
            ],

            externals: {
                'preact': 'preact',
                'firebase': 'firebase'
            }
        };
    }
};