/* eslint-disable no-useless-constructor */
import { Component } from 'react'
import PropTypes from 'prop-types'

class DrumPad extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <p>Drum pad #{this.props.drumpad}</p>
  }
}

DrumPad.propTypes = {
  drumpad: PropTypes.string.isRequired
}

export default DrumPad
