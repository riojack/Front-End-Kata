let webpack = require('webpack');

module.exports = {
  entry: {
    'application': __dirname + '/index.js',
    'application.min': __dirname + '/index.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    path: __dirname + '/dist',
    pathinfo: true,
    filename: '[name].js',
    sourcePrefix: ''
  },
  module: {
    rules: [{
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      },
      {
        test: /\.css$|\.scss$/,
        exclude: /node_modules/,
        loaders: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: {
                discardComments: {
                  removeAll: true
                }
              }
            }
          }, {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed'
            }
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};
