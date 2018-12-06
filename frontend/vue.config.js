const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    baseUrl: "http://0.0.0.0:8080/", // The base URL your application bundle will be deployed at
    outputDir: './dist/', //The directory where the production build files will be generated in when running vue-cli-service build

    chainWebpack: config => {

        config.optimization
            .splitChunks(false)

        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: './webpack-stats.json'}])

        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            .public('http://0.0.0.0:8080')
            .host('0.0.0.0')
            .port(8080)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({"Access-Control-Allow-Origin": ["\*"]})
            }
        };