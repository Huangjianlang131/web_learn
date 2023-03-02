const path = require("path");
// 分离CSS文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩CSS文件
const optimizeCss = require('optimize-css-assets-webpack-plugin');
// 分离HTML文件
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
    // 入口
    entry:"./src/index.js",
    // entry:{
    //     index:"./src/index.js",
    //     login:"./src/login/login.js"
    // },
    output:{
        // filename:"bundle.js",
        filename:"[name].js",
        path:path.resolve(__dirname,"./dist")
    },
    mode:"production",
    module:{
        rules:[
            // 配置很多你需要的处理方案：css、es6、vue、react
            // {
            //     // test:gulp中的scr：找到对应的匹配文件
            //     test:/\.css$/,
            //     use:["style-loader","css-loader"]
            // }
            {
                // test:gulp中的scr：找到对应的匹配文件
                test:/\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            // ES6转码成ES5规则
            {
                test:/\.js$/,
                use:['babel-loader'],
                // 只对项目根目录下的 src 目录中的文件采用 babel-loader
                include:path.resolve(__dirname,'src')
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test:/\.(png|jpe?g|gif)/i,
                use:[
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    plugins:[
        // 分离
        new MiniCssExtractPlugin({
            filename:"main.css",
            // chunkFilename:'[id].css'
        }),
        // 压缩
        new optimizeCss(),
        // 分离HTML
        new HTMLPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.json',".css"]
    }
}