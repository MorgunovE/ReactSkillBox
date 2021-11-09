import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {Header} from '../shared/Header'
// import {StarWarsNameClass} from '../shared/componentsExamples/StarWarsNameClass.tsx'
import {
  StarWarsNameFunctionComponent
} from '../shared/componentsExamples/StarWarsNameFunction.tsx'

window.addEventListener('load', ()=>{
  // ReactDOM.hydrate(<Header />, document.getElementById('react-root'))
  // ReactDOM.render(<StarWarsNameClass />, document.getElementById('react-root'))
  ReactDOM.hydrate(<StarWarsNameFunctionComponent />, document.getElementById('react-root'))
})
