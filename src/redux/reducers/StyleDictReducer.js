import { POST_STYLE_DICT } from '../constants/action-types'

// const initialState = [{}]
const initialState = {
  style_dict: [
    {
      category: 'color',
      type: 'base',
      item: 'red',
      value: 'red'
    }
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case POST_STYLE_DICT:
    console.log('posting style dictionary!')
      break
    default:
      return state
  }
}
