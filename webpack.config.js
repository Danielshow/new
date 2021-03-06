const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {  // where we defined file patterns and their loaders
      rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
        },
        {
            test: /\.(sass|scss)$/,
            use: [
                    {
                      loader: "style-loader"
                    },
                    {
                      loader: "css-loader"
                    },
                    {
                      loader: "sass-loader"
                    }
            ]
        }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + "/src/index.html",
          inject: 'body'
      })
  ],
  devServer: {
      contentBase: './',
      port: 7700,
  }
};
