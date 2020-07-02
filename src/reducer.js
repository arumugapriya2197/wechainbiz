import { combineReducers } from 'redux'
import { SET_USER_DETAILS } from './constants'

const defaultState = {
    userDetails: null
}

const Application = ((state = defaultState, { type, payload, ...action }) => {
    switch (type) {
        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: payload
            }

        default:
            return state
    }
})

export default combineReducers({
    Application
})