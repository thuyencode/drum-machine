import PropTypes from 'prop-types'
import { switchContainerStyle, switchStyle } from '../js/styles'

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className={`${switchContainerStyle.base} ${isOn ? switchContainerStyle.on : switchContainerStyle.off}`}
    >
      <div className={`${switchStyle.base} ${isOn ? switchStyle.on : switchStyle.off}`} />
    </div>
  )
}

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

Switch.defaultProps = {
  isOn: true,
  handleToggle: () => {
    console.error('No callback functions provided!')
  }
}

export default Switch
