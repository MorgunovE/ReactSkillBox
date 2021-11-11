import React from "react";
import './main.global.less'
import {hot} from "react-hot-loader/root";
import {Layout} from './shared/Layout'
import {Header} from "./shared/Header/Header";
import {Content} from "./shared/Content";

function AppComponent(){
  return (
  <Layout>
    <Header />
    <Content>
      content
    </Content>
  </Layout>
  )
}
// video 6
export const App = hot(AppComponent)