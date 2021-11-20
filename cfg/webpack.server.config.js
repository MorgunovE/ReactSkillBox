const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { DefinePlugin} = require('webpack')
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development'
const GLOBAL_LESS_REGEXP = /\.global\.less$/

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  externals: [nodeExternals()],
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
          [
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                },
                // onlyLocals: true,
              }
            },
            'less-loader',
          ],
        exclude: GLOBAL_LESS_REGEXP
      },
      {
        test: GLOBAL_LESS_REGEXP,
        use: ['css-loader', 'less-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  devtool: IS_DEV ? 'eval' : false,
  plugins: [new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`})]
}