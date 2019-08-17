import { combineReducers } from 'redux';

function web3(state = {}, action) {
    switch(action.type) {
        case 'WEB3_LOADED':
            return { ...state, connection: action.connection }
        case 'WEB3_ACCOUNT_LOADED':
            return { ...state, account: action.account }
        default: 
            return state;
    }
}

function contract(state = {}, action) {
  switch(action.type) {
      case 'CONTRACT_LOADED':
          return { ...state, loaded: true, Contract: action.contract }
      default:
          return state
  }
}

const rootReducer = combineReducers({
  web3,
  contract,
})

export default rootReducer
