import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userreducer from '../reducer/userReducer'

const configueStore =()=>{
    const store = createStore(combineReducers({
        user:userreducer
    }),applyMiddleware(thunk))
    return store
}
export default configueStore