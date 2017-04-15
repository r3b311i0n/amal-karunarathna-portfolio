// Karma configuration
// Generated on Fri Apr 14 2017 18:02:15 GMT+0530 (+0530)

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        files: [
            './test/**/*.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './test/**/*.js': ['webpack', 'sourcemap']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        webpack: {
            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
            },

            devtool: 'inline-source-map',

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

            devServer: {
                contentBase: [
                    path.join(__dirname, 'public'),
                    path.join(__dirname, 'node_modules/react/dist'),
                    path.join(__dirname, 'node_modules/react-dom/dist')
                ],
                compress: true,
                port: 4200,
                publicPath: '/dist/',
                historyApiFallback: true,
                noInfo: true
            }
        }
    });
};
