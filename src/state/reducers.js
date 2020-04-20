import { combineReducers } from 'redux'
import { createReducer } from './baseReducer'

import { USER } from 'state/users/actions'

export default combineReducers({
  users: createReducer(USER)
})
