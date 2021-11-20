const path = require('path')
const {HotModuleReplacementPlugin, DefinePlugin} = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'
const GLOBAL_LESS_REGEXP = /\.global\.less$/
const DEV_PLUGINS = [
  new CleanWebpackPlugin(),
  new HotModuleReplacementPlugin(),
]
const COMMON_PLUGINS = [new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`})]

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
    }
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"]
          }
        },
      },
      {
        test: /\.less$/,
        use:
          ['style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                }
              }
            },
            'less-loader',
          ],
        exclude: GLOBAL_LESS_REGEXP
      },
      {
        test: GLOBAL_LESS_REGEXP,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  devtool: setupDevtool(),
  // optimization: {
  //   minimize: true,
  // },
  plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
}