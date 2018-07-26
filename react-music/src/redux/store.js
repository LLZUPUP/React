// store 单一 状态树
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)
export default store