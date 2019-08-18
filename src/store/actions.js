// WEB3
export function web3Loaded(connection) {
  return {
    type: 'WEB3_LOADED',
    connection
  }
}

export function web3AccountLoaded(account) {
  return {
    type: 'WEB3_ACCOUNT_LOADED',
    account
  }
}

// CONTRACT
export function contractLoaded(contract) {
  return {
    type: 'CONTRACT_LOADED',
    contract
  }
}

export function contractEventsLoaded(events) {
  return {
    type: 'CONTRACT_EVENTS_LOADED',
    events
  }
}
