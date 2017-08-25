var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      index: __dirname + '/src/index/index.jsx'
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        pathinfo: true,
        filename: '[name].js'
    },
    resolve: {
      modules: [
          path.join(__dirname, 'src/index'),
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
                test: /\.css$/,
            	loader: 'style-loader!css-loader?importLoaders=1'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'dist/[name].[ext]',
                        context: ''
                    }
                }
                ]
            }
        ]
    }

};
