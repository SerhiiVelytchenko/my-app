import {combineReducers, createStore} from 'redux'
import UsersReducer from './users-reducer'
import ProfileReducer from './profile-reducer'


let reducers = combineReducers ({
    profile111: ProfileReducer,
    users: UsersReducer
})

let store = createStore(reducers)

export default store