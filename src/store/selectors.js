// We invoke this function to fetch our blockchain data out of the store. Learn more about lodash library here -> https://lodash.com/docs/
import { get } from 'lodash'
// We then wrap our data in a selector which we pass to our components as props. Learn more about reselect here -> https://github.com/reduxjs/reselect
import { createSelector } from 'reselect';

//////////////////////// General Setup ///////////////////////////
const account = state => get(state, 'web3.account')
export const accountSelector = createSelector(account, a => a) // same as (account) => { return account }

const web3 = state => get(state, 'web3.connection')
export const web3Selector = createSelector(web3, w => w)

const contractLoaded = state => get(state, 'contract.loaded', false) 
export const contractLoadedSelector = createSelector(contractLoaded, cl => cl)

const contract = state => get(state, 'contract.contract', [])
export const contractSelector = createSelector(contract, c => c)
