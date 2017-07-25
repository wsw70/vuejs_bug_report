module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: true
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    }
}