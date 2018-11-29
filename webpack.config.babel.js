import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
const devMode = process.env.NODE_ENV !== 'production'

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
                test: /\.s?[ac]ss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        //publicPath: '../'
                      }
                    },
                    {
                      loader: 'css-loader',
                      options: {
                        url: false,
                        sourceMap: true
                      }
                    },
                    // {
                    //     loader: 'postcss-loader'
                    // },
                    {
                      loader: 'sass-loader',
                      options: {
                        sourceMap: true
                        //includePaths: [path.resolve("./src/sass")]
                      }
                    },
                  ],
            }
        ]       

    },
    entry : {
        app: ['babel-polyfill',path.resolve(__dirname, 'src/scripts/start.js')]
    },
    output: {
        filename: 'bundle.js',
        publicPath: '',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"src/index.html"),
            file: "index.html",
            inject: "body"
          }),
          new MiniCssExtractPlugin({
            filename: "style.css"
          })
    ],
    devtool: 'source-map'
}
