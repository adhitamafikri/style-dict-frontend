import { combineReducers } from 'redux'
import StyleDictReducer from './StyleDictReducer'

const rootReducer = combineReducers({
  style_dict: StyleDictReducer
})

export default rootReducer
