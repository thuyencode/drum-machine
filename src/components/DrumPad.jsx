/* eslint-disable no-useless-constructor */
import { Component } from 'react'
import PropTypes from 'prop-types'

class DrumPad extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <button className='box-border rounded-md bg-white px-7 py-5 text-lg font-bold drop-shadow-xl hover:bg-blue-300 hover:text-white focus-visible:bg-sky-300 focus-visible:text-white focus-visible:outline-none active:bg-sky-300 active:text-white'>
        {this.props.drumpad}
      </button>
    )
  }
}

DrumPad.propTypes = {
  drumpad: PropTypes.string.isRequired
}

export default DrumPad
