import React, { Component } from 'react'
import logo from '../logo.png';

export class Content extends Component {

  render() {
    return (
      <div className='content'>
        <div className='subcontent'>
          <img src={logo} alt="/" />
        </div>
      </div>
    )
  }
}

export default Content

