var outputFolder = 'public'

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: outputFolder + '/',
        filename: 'bundle.js',
        cssFilename: null,
        hash: false,
        publicPath: '/'
    },
    devServer: {
        port: 3000,
        contentBase: "./src",
        noInfo: true, //  --no-info option
        hot: true,
        inline: true
    },
    devtool:'cheap-module-eval-source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot', 'babel'],
            },
        ]
    }
};
