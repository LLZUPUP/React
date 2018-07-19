import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state= {
    value: 'Hello!'
  }
  handleChange (event) {
    this.setState({
      value: event.target.value
    })  }
  render() {
    const val = this.state.value
    return (
      <div className="App">
        <div>
          <input type="text" value={val} onChange={this.handleChange.bind(this)}/>
          <p>{ val }</p>
        </div>
      </div>
    );
  }
}

export default App;
