// webpack.config.js
const webpack = require('webpack');

module.exports = {
    // ... outras configurações
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ]
};
