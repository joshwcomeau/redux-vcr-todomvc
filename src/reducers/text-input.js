import { WRITE_TODO_TEXT } from '../constants/ActionTypes'

const initialState = ''

export default function textInput(state = initialState, action) {
  switch (action.type) {
    case WRITE_TODO_TEXT:
      return action.text

    default:
      return state
  }
}
