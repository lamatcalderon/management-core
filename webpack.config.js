const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        "erp-utilitarios": path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        chunkFilename: 'index.js',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new DtsBundlePlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./package.json",
                    to({ context, absoluteFilename }) {
                      return "../dist/package.json";
                    },
                  }
            ]
        })
    ],
    devtool: 'source-map',
    resolve: { extensions: ['.ts'] }
};
