import { createStore } from 'redux'
import appReducer from './reducer/reducers'

const store = createStore(appReducer)

export default store