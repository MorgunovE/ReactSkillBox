import express from 'express'
// const express = require('express');
import ReactDOM from 'react-dom/server'
// import {Header} from '../shared/Header'
import {indexTemplate} from './indexTemplate'
import {App} from '../App'

const app = express();
app.use('/static', express.static('./dist/client'))
app.get('/', (req,res)=>{
  res.send(
    // indexTemplate(ReactDOM.renderToNodeStream(Header()))
    indexTemplate(ReactDOM.renderToNodeStream(App()))
  )
})
app.get('/auth', (req,res)=>{
  // req.query.code
  res.send(
    // indexTemplate(ReactDOM.renderToNodeStream(Header()))
    indexTemplate(ReactDOM.renderToNodeStream(App()))
  )
})
app.listen(3000, ()=> {
  console.log('Server started on http://localhost:3000')
})