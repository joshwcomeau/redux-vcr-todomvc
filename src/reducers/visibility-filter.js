import { SHOW_ALL } from '../constants/TodoFilters';
import { UPDATE_VISIBILITY_FILTER } from '../constants/ActionTypes'

const initialState = SHOW_ALL;

export default function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VISIBILITY_FILTER:
      return action.filter

    default:
      return state
  }
}
