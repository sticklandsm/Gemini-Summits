import { combineReducers } from '@reduxjs/toolkit'

import message from './message'
import waiting from './waiting'

export default combineReducers({
  message,
  waiting,
})
