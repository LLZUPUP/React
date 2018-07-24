import React, { Component } from 'react';
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import '@/stylus/reset.styl'
import logo from '@/assets/imgs/logo.png'
import './App.styl';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <img src={logo} alt="" className="app-logo"/>
            <h1 className="app-title">QQ Music</h1>
          </header>
          
          <div className="music-tab">
            <div className="tab-item selected">
              <NavLink to="/recommend" className="nav-link">
                <span>推荐</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/ranking" className="nav-link">
                <span>排行榜</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/search" className="nav-link">
                <span>搜索</span>
              </NavLink>
            </div>
          </div>
          
          <div className="music-view">
            <Switch>
                <Route path="/recommend" component={Recommend}></Route>
                <Route path="/ranking" component={Ranking}></Route>
                <Route path="/search" component={Search}></Route>
                <Redirect from='/' to="/recommend"/>
                <Route component={Recommend}></Route>
            </Switch>
            
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
