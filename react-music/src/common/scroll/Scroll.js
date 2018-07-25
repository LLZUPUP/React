import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll' 
import './scroll.styl'

class Scroll extends Component {
  componentDidUpdate() {
    // 组件更新以后
    if(this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh()
    }
  }
  refresh() {
    if(this.bScroll) {
      this.bScroll.refresh()
    }
  }
  componentWillUnmount () {
    this.bScroll.off('scroll');
    this.bScroll = null;  
  }
  componentDidMount() {
    // 组件渲染以后
    this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView);
    if(!this.bScroll) {
      this.bScroll = new BScroll( this.scrollView, {
        probeType: 3,
        click: this.props.click
      })
      if( this.props.onScroll ) {
        this.bScroll.on('scroll', (scroll)=> {
          this.props.onScroll(scroll)
        })
      }
    }
  }
  render () {
    return (
      <div className="scroll-view" ref="scrollView">
        { this.props.children }
      </div>
    )
  }
}

Scroll.defaultProps = {
  click: true,
  refresh: false,
  onScroll: null
}

Scroll.propsTypes = {
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func
}

export default Scroll;