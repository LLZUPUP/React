import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '@/components/App';
// redux  state, actions, 没有直接的map,提出将组件分成两部分
// 原来UI组件部分， 新增一个container 容器
// redux 将数据给container container 再将数据给component
import Root from  '@/components/Root'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
