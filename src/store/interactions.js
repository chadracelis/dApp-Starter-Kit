//////////////// This is where we create all our interactions for our application. ///////////////////////
/////////// We initialize web3 and our contract which are then pass down to our components ///////////////
///////////////////////// and to our actions to update the state. ////////////////////////////////////////

///////////////// Any interactions such as triggering methods will be passed here  ///////////////////////
//////////////// from our components where we can call upon web3 to handle for us ////////////////////////

/////////////// <- Our data will pass through our store in this order -> /////////////////////////////////
/////////////// 1. interactions - hanldle interactions and intiailize web3 and contract //////////////////
/////////////// 2. actions - handle our interactions and pass to reducers ////////////////////////////////
/////////////// 3. reducers - retrieve actions and update the state //////////////////////////////////////
/////////////// 4. selectors - fetch the state from our store ////////////////////////////////////////////

import Web3 from 'web3';
import {
  web3Loaded,
  web3AccountLoaded,
  contractLoaded,
  contractEventsLoaded
} from './actions';
import SampleContract from '../abis/SampleContract.json';


// LOAD WEB3 
export const loadWeb3 = (dispatch) => {
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  dispatch(web3Loaded(web3));
  return web3;
}

// LOAD ACCOUNT
export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  dispatch(web3AccountLoaded(account));
  return account;
}

// LOAD CONTRACT
export const loadContract = async (web3, networkId, dispatch) => {
  try {
    const contract = web3.eth.Contract(SampleContract.abi, SampleContract.networks[networkId].address);
    dispatch(contractLoaded(contract));
    return contract;
  } catch(error) {
    window.alert('Contract not deployed to the current network. Please select another network with Metamask.')
    return null
  }
}

// LOAD CONTRACT EVENTS
export const loadContractEvents = async (contract, dispatch) => {
  // Fetch events with 'dogAdded' event 
  const addedDogs = await contract.getPastEvents('dogAdded', { fromBlock: 0,  toBlock: 'latest' })
  console.log(addedDogs)
  // Format events
  const dogs = addedDogs.map((event) => event.returnValues)
  // Add events to redux store
  dispatch(contractEventsLoaded(dogs))
  return dogs
}
