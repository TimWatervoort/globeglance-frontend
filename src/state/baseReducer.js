const initialState = {
  isLoading: false,
  isError: false,
  data: null,
  errorMessage: null
}

export const createReducer = (actionName = '') => (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_${actionName}`:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    
    case `SAVE_${actionName}`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }

    case `ERROR_${actionName}`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload
      }

    default:
      return state
  }
}
