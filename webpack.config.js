/*
* @Author: hhombergs
* @Date:   2017-08-29
* @Last Modified by:   hhombergs
* @Last Modified time: 2017-09-08
*/

var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
      index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        pathinfo: true,
        filename: '[name].js'
    },
    resolve: {
      modules: [
          path.join(__dirname, './src'),
          path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?importLoaders=1'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1'
            }
        ]
    }
};