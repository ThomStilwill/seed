import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {

    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]       

    },
    entry : {
        app: ['babel-polyfill',path.resolve(__dirname, 'src/scripts/start.js')]
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}