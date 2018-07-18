import React, { Component } from 'react';
import './App.css';//style
import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'

// .vue 三部分 template js style
// react .js 负责输出组件类 继承的概念  template在哪儿呢？ jsx
    // jsx 就是在render里面
class App extends Component {
  render() {
    return (
      <Notes/>
    );
  }
}

export default App;
