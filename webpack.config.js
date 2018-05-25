/* global require module __dirname */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        entry: ['babel-polyfill', './src/app.js'],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }]
        },
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
        },
        plugins: [
            CSSExtract
        ]
    }
};
