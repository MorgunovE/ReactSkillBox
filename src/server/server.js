import express from 'express'
// const express = require('express');
import ReactDOM from 'react-dom/server'
// import {Header} from '../shared/Header'
import {indexTemplate} from './indexTemplate'
import {App} from '../App'
import axios from 'axios'

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
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: {username: process.env.CLIENT_ID, password:'K2xoYRDxpvwf6NdQVkHKJLdP4WEkOQ'},
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    )
    .then(({data})=>{
      res.send(
        // indexTemplate(ReactDOM.renderToNodeStream(Header()))
        indexTemplate(ReactDOM.renderToNodeStream(App()), data['access_token'])
      )
    })
    .catch(console.log)
})
app.listen(3000, ()=> {
  console.log('Server started on http://localhost:3000')
})