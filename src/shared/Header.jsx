import * as React from 'react';
import {hot} from 'react-hot-loader/root'
function HeaderComponent(){
  return (
    <header>
      <h1>Reddit for our own 8)</h1>
      <p>Hello there</p>
    </header>
  )
}
export const Header = hot(HeaderComponent)