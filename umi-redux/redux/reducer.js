import { UPDATE_VALUE } from './action'
export function reducer(state,action) {
  state = {value: 1}
  switch(action.type) {
    case UPDATE_VALUE:
      state.value = action.payload
    break;
    default:
    break;
  }
  return state
}