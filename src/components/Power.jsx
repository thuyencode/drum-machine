import { Component } from 'react'

class Power extends Component {
  constructor () {
    super()
    this.state = {
      someKey: 'someValue'
    }
  }

  render () {
    return <p>{this.state.someKey}</p>
  }

  componentDidMount () {
    this.setState({
      someKey: 'otherValue'
    })
  }
}

export default Power
