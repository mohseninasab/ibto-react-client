var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin'); 

module.exports = (config, env) => {
    config.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "report.html",
        }),
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg|woff|woff2)$/,
          threshold: 5120,
          minRatio: 0.8
          }),
        new BrotliPlugin({ //brotli plugin
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg|woff|woff2)$/,
          threshold: 5120,
          minRatio: 0.8
        })
    )
    return config
}