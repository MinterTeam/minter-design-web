const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const envConfig = require('dotenv').config();
const locales = require('./lang/locales');


let config = {
    mode: process.env.NODE_ENV || 'development',
    // entry specified in gulpfile.js
    output: {
        filename: '[name].js',
    },
    resolve: {
        alias: {
            // 'swiper$': 'swiper/dist/js/swiper.jquery.js',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: 'tmp/babel-cache/',
                    }
                }
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new webpack.DefinePlugin({
            'process.env': Object.assign({
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                LOCALES: JSON.stringify(locales),
            }, envConfig.error ? {} : Object.keys(envConfig.parsed).reduce((accumulator, key) => {
                accumulator[key] = JSON.stringify(envConfig.parsed[key]);
                return accumulator;
            }, {})),
        }),
    ],
    performance: {
        hints: false
    },
};

// if (process.env.NODE_ENV === 'production') {
//     config.plugins.push(new webpack.optimize.UglifyJsPlugin());
// }

if (process.env.WEBPACK_ENV === 'analyze') {
    let timestamp = Math.floor(Date.now() / 1000); // seconds
    config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        defaultSizes: 'parsed',
        generateStatsFile: true,
        reportFilename: `tmp/webpack-analyzer/report-${timestamp}.html`,
        statsFilename: `tmp/webpack-analyzer/report-${timestamp}.json`,
    }));
}


module.exports = config;
