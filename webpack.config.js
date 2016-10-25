//init
const webpack = require('webpack');

//file ops
const HtmlWebpackPlugin = require('html-webpack-plugin');

//folder ops
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

//PostCss support
const postcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

//Constants
const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');
const STYLE = path.join(__dirname, 'app/style.css');
const PUBLIC = path.join(__dirname, 'app/public');
const TEMPLATE = path.join(__dirname, 'app/templates/index.html');
const NODE_MODULES = path.join(__dirname, 'node_modules');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
    //Path and extensions
    entry: {
        app: APP,
        style: STYLE
    },
    output: {
        path: BUILD,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    // Loaders for processing different file types
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: APP
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
                include: [APP, NODE_MODULES]
            },
            {
                test: /\.json$/,
                loader: 'json',
                include: [APP, NODE_MODULES]
            }
        ]
    },
    //Configure PostCSS plugins
    postcss: function processPostcss(webpack) {
        //esling-disable-line no-shadow
        return [
            postcssImport({
                addDependencyTo: webpack
            }),
            precss,
            autoprefixer({ browsers: ['last 2 versions'] })
        ];
    },
    //Source maps used for debugging information
    devtool: 'eval-source-map',
    //webpack-dev-server config
    devServer: {
        historyApiFallback: true,
        hot: true,
        progress: true,
        stats: 'errors-only',
        host: HOST,
        port: PORT,

        //CopyWebpackPlugin: This is required for webpack-dev-server.
        //The path should be an absolute path to your build destination
        outputPath: BUILD
    },
    //Webpack plguins
    plugins: [
        //Required to inject NODE_ENV within React App.
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development') //eslint-disable-line quote-props
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: PUBLIC, to: BUILD }
        ],
            {
                ignore: [
                    '.DS_Store'
                ]
            }
        ),
        new HtmlWebpackPlugin({
            template: TEMPLATE,
            // Js is placed at the bottom of the body element
            inject: 'body'
        })
    ]
};