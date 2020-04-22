import { getOneRegion } from 'services/requests'

export const SELECTED_REGION = 'SELECTED_REGION'
const LOAD_SELECTED_REGION = 'LOAD_SELECTED_REGION'
const SAVE_SELECTED_REGION = 'SAVE_SELECTED_REGION'
const ERROR_SELECTED_REGION = 'ERROR_SELECTED_REGION'

export const loadOneRegion = id => async dispatch => {
  dispatch({ type: LOAD_SELECTED_REGION })
  try {
    const response = await getOneRegion(id)
    return dispatch({ type: SAVE_SELECTED_REGION, payload: response.data })
  } catch (error) {
    return dispatch({ type: ERROR_SELECTED_REGION, payload: error })
  }
}
