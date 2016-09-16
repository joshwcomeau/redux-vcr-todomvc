import { combineReducers } from 'redux'
import todos from './todos'
import textInput from './text-input'
import visibilityFilter from './visibility-filter'

const rootReducer = combineReducers({
  todos,
  textInput,
  visibilityFilter,
})

export default rootReducer
