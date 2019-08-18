import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  loadWeb3,
  loadAccount,
  loadContract,
} from '../store/interactions';
import { contractLoadedSelector } from '../store/selectors';
import Navbar from './Navbar';
import Content from './Content';

class App extends Component {
  
  // Load blockchain before rendering
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  // Connect to blockchain via Web3
  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch); 
    await loadAccount(web3, dispatch); 
    const networkId = await web3.eth.net.getId();
    const contract = await loadContract(web3, networkId, dispatch)
    if(!contract) {
      window.alert('Contract not detected on the current network. Please select another network with Metamask.')
      return
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.props.contractLoaded ? <Content /> : <div className="content"></div> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contractLoaded: contractLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(App);





