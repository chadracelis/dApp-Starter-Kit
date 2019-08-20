import React, { Component } from 'react'
import { connect } from 'react-redux';
import logo from '../logo.png';
import { contractSelector } from '../store/selectors';
import { loadContractEvents } from '../store/interactions';

class Content extends Component {

  componentWillMount() {
    this.loadBlockchainData(this.props)
  }

  async loadBlockchainData(props) {
    const { contract, dispatch } = props
    await loadContractEvents(contract, dispatch)
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='subcontainer'>
          <img src={logo} alt="/" />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contract: contractSelector(state)
  }
}

export default connect(mapStateToProps)(Content)

