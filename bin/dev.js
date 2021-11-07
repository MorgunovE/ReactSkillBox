const webpack = require('webpack')
// const webpackConfig = require('../webpack.config')
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const hmrServer = express()
const clientCompiler = webpack(webpackClientConfig)
hmrServer.use(webpackDevMiddleware(clientCompiler, {
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRender: true,
  // noInfo: true,
  // watchOptions: {
  //   ignore: /dist/,
  // },
  writeToDisk: true,
  stats: 'errors-only',
}))
hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr',
}))
hmrServer.listen(3001, ()=>{
  console.log('HMR server successfully running')
})
const compiler = webpack(webpackServerConfig)
// const compiler = webpack(webpackConfig)

compiler.run((err) => {
  if(err){
    console.log('Compilation failed: ', err)
  }
  compiler.watch({}, (err)=>{
    if(err){
      console.log('Compilation failed: ', err)
    }
    console.log('Compilation was successfully')
  })
  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ]
  })
})