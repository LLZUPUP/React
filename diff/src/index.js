import React from './react'
import ReactDOM from './react-dom'
ReactDOM.render(
  <div>
    Hello
    <span className='rt' onClick="console.log('zz')" style={{fontSize: 20,fontWeight: 'bold'}}> World! </span>
    <Counter/>
  </div>
  ,
  document.getElementById('root')
)