const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    if (env !== 'prod') {
        return {
            context: path.resolve(__dirname, './'),

            entry: './src/index.tsx',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname,'dist'),
                publicPath: '/dist/'
            },

            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
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
                        test: /\.css$/,
                        use: ExtractTextPlugin.extract(
                            {
                                fallback: 'style-loader',
                                use: [
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            importLoaders: 1,
                                            modules: true,
                                            sourceMap: true
                                        }
                                    },
                                    'postcss-loader'
                                ]
                            }
                        ),
                        exclude: /node_modules/
                    }
                ]
            },

            plugins: [
                new ExtractTextPlugin('styles.css')
            ],

            externals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'redux': 'Redux',
                'react-redux': 'ReactRedux',
                'react-redux-firebase': 'ReactReduxFirebase'
            },

            devServer: {
                contentBase: path.join(__dirname, 'public'),
                compress: true,
                port: 4200,
                publicPath: '/dist/'
            }
        };
    }
};