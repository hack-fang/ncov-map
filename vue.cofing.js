
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzip = true

module.exports = {
    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    outputDir: 'dist',

    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: '',
    publicPath: './',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        algorithm: 'gzip',
                        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,// 匹配文件名
                        threshold: 10240, // 对超过10k的数据压缩
                        deleteOriginalAssets: false, // 不删除源文件
                        minRatio: 0.8 // 压缩比
                    })
                ]
            }
        }
    }
}