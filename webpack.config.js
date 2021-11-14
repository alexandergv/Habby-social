module.exports =[ {
    entry: './src/components/index.js',
    output: {  
        path: `${__dirname}/src/public`,
        filename:'bundle.js'
        // ,
        // publicPath: '/'
            }
        , 
    module:{
        rules: [
                {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
                }
                ]        
        
            }
            // ,devServer: {
            //     historyApiFallback: true,
            //   }
    }

]