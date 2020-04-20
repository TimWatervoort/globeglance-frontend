import { getUser } from 'services/requests'

export const USER = 'USER'
const LOAD_USER = 'LOAD_USER'
const SAVE_USER = 'SAVE_USER'
const ERROR_USER = 'ERROR_USER'

export const loadUserById = id => async dispatch => {
  dispatch({ type: LOAD_USER })
  try {
    const response = await getUser(id)
    return dispatch({ type: SAVE_USER, payload: response.data })
  } catch (error) {
    return dispatch({ type: ERROR_USER, payload: error })
  }
}
