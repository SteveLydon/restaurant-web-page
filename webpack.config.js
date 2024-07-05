const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',

        // Runtime code for hot module replacement
        hot: 'webpack/hot/dev-server.js',

        // Dev server client for web socket transport, hot and live reload logic
        client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },

    devtool: 'inline-source-map',
    devServer: {
        watchFiles: ["src/*.html"],
        static:'./dist',
        // Dev server client for web socket transport, hot and live reload logic
        hot: false,
        client: false,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Title (Edit in Webpack config)',
            template: './src/index.html'
        }),

        // Plugin for hot module replacement
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
        },
        {
            test: /\.xml$/i,
            use: ['xml-loader'],
        },
      ],
    },
};
