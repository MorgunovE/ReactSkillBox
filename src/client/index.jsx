import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from '../App'
// import {Header} from '../shared/Header'
// import {StarWarsNameClass} from '../shared/componentsExamples/StarWarsNameClass.tsx'
// import {
  // StarWarsNameFunctionComponent
// } from '../shared/componentsExamples/StarWarsNameFunction.tsx'

window.addEventListener('load', ()=>{
  // ReactDOM.render(<Header />, document.getElementById('react-root'))
  ReactDOM.render(<App />, document.getElementById('react-root'))
  // ReactDOM.render(<StarWarsNameClass />, document.getElementById('react-root'))
  // ReactDOM.hydrate(<StarWarsNameFunctionComponent />, document.getElementById('react-root'))
})
