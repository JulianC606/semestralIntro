import { combineReducers } from 'redux'
import structure from './structureReducer'
import location from './locationReducer'

const rootReducer = combineReducers({
  structure,
  location
})

export default rootReducer
