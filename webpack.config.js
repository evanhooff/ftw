const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
    'babel-polyfill',
    './src/main.js'
  ],
  node: {
    fs: 'empty'
  },
  output: {
    path: path.resolve(__dirname, './deploy/dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          extractCSS: true
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/base.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + process.env.NODE_ENV + '"'
      }
    }),
    new CopyWebpackPlugin([
      {
        from: 'signup', to: '../signup'
      },
      {
        from: 'static', to: '../static'
      },
      {
        from: './index.html', to: '../index.html'
      }
    ])
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './assets'),
      stubs: path.resolve(__dirname, './stubs')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    disableHostCheck: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.optimization = {
    minimize: true
  };
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}