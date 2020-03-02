const path = require('path');                       // include the path module for later use
const HTMLWebpackPlugin = require('html-webpack-plugin');   // include the html-webpack-plugin
module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'], // entry point of the resultant code                  
    output: {
        path: path.resolve(__dirname,'dist'),       // absolute path down to dist/js folder
        //sourceMapFilename: '[name].js.map',          // source maps file name
        filename: 'js/bundle.js'                   // the name of the output bundle
    },
    //devtool: 'source-map',                     // Generate WebPack Source Maps for debugging
    devServer: {                                    // definitions for the local development server (hot re-load)
        contentBase: './dist/'                      // where we should server our content from
    },
    // all this is so that src index.html is copied to dist and 
    // bundled with correct executables
    plugins: [                                       
        new HTMLWebpackPlugin({
            filename: 'index.html',                 // the name of the production file that we want produced
            template: './src/index.html'            // The template (source) html file
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};