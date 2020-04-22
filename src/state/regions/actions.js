import { getRegions } from 'services/requests'

export const REGIONS = 'REGIONS'
const SAVE_REGIONS = 'SAVE_REGIONS'
const LOAD_REGIONS = 'LOAD_REGIONS'
const ERROR_REGIONS = 'ERROR_REGIONS'

export const loadAllRegions = () => async dispatch => {
  dispatch({ type: LOAD_REGIONS })
  try {
    const response = await getRegions()
    return dispatch({ type: SAVE_REGIONS, payload: response.data })
  } catch (error) {
    return dispatch({ type: ERROR_REGIONS, payload: error })
  }
}
