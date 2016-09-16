import React, { Component } from 'react'

let DevTools
if (process.env.NODE_ENV !== 'production') {
  DevTools = require('../../components/DevTools').default;
}

const DevToolWrapper = (WrappedComponent) => (
  class WrappedDevTools extends Component {
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
          {DevTools ? <DevTools /> : null}
        </div>
      )
    }
  }
)

export default DevToolWrapper
