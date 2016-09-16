import React from 'react'

import { Replay } from 'redux-vcr.replay'


const DevTools = () => (
  <div>
    {/* Other devtools (eg. Redux LogMonitor) can be used here as well */}
    <Replay />
  </div>
)

export default DevTools
