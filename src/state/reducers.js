import { combineReducers } from 'redux';
import { createReducer } from './baseReducer';
import preferencesReducer from './preferences/reducer';

import { USER } from 'state/users/actions';
import { REGIONS } from 'state/regions/actions';
import { SELECTED_REGION } from 'state/selectedRegion/actions';

export default combineReducers({
  users: createReducer(USER),
  regions: createReducer(REGIONS),
  selectedRegion: createReducer(SELECTED_REGION),
  preferences: preferencesReducer
});
