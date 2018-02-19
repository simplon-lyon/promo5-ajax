const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/scripts/index.js',
        vendor: ['bootstrap']
    },
    output: {
        filename: 'dist/[name].bundle.js'
    },   
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.scss$/,
           use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                    sourceMap: true
                }
            }]
        }]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
      new CopyWebpackPlugin([
          {from: './src/*.html', to:'dist/[name].[ext]'},
          {from: './src/assets', to:'dist/assets'}
      ])
    ]
}