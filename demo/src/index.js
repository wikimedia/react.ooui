import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from './example';

class Demo extends Component {
  render() {
    return <div>
      <h1>react.ooui</h1>
      <Example/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
