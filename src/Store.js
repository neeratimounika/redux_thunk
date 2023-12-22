import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"


const initialState = {
    userData:{

    }
}

function userReducer(state=initialState,action){
    
    switch(action.type){
        case 'ADD':
            return {...state,userData:action.payload}
    }

}

const store= createStore(userReducer,applyMiddleware(thunk));
export default store
