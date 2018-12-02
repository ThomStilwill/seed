import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {

    module: {
        rules: [
            {   test: /\.svg$/, 
                use: [{ 
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images',
                            publicPath: 'assets/images'
                        }  
                    }]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {loader: 'html-loader'}
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader' }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader
                    },
                    {
                      loader: 'css-loader',
                      options: {
                        url: false,
                        sourceMap: false
                      }
                    },
                    {
                      loader: 'sass-loader',
                      options: {
                        sourceMap: true
                      }
                    },
                  ],
            }
        ]       
    },
    entry : {
        app: ['babel-polyfill',path.resolve(__dirname, 'src/scripts/start.js'),path.resolve(__dirname, 'src/styles/start.scss')]
    },
    output: {
        filename: '[name].js',
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
        }),
        new CopyWebpackPlugin([{from: 'src/assets'}])
    ],
    devtool: 'source-map',
}
