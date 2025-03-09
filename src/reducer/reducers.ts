import { combineReducers } from 'redux'
import task from './task'
import user from './userReducer'

export default combineReducers({
  task,
  user
})