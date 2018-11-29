import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ["src/sass"]
                    }
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"src/index.html"),
            file: "index.html",
            inject: "body"
          })
    ]
}