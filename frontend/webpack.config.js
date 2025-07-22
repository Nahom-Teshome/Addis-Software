const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const  Dotenv = require('dotenv-webpack')
module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'mainBundle.js',
        clean:true
    },
    module:{
        rules:[
            {   
                test:/\.(js|jsx)$/,
                exclude:'/node_modules/',
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader","postcss-loader"], 
            },
            {
                 test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',

            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./public/index.html',
        filename:'./index.html'
        }),
        new Dotenv()
    ],

    devServer:{
        port: 3000,
        liveReload:true
    }
}