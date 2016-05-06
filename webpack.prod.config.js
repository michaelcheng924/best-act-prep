var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin('style.css');

module.exports = {
    entry: [
        './app/components'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'app'],
        extensions: ['', '.js', '.jsx', 'scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            }
        ]
    },
    plugins: [
        extractCSS,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
};
