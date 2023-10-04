/* eslint-disable no-useless-constructor */
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { drumPadStyle } from '../js/styles'

const DrumPad = ({ drumpad, sounds, power, bank, names, setName }) => {
  const ref = useRef(null)
  const [clicked, setClicked] = useState(false)
  const sound = sounds[bank ? 1 : 0]

  useEffect(() => {
    const button = ref.current
    const audio = button.children[0]

    const play = () => {
      if (power === false) {
        return
      }

      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log(`Played '${sound}'`)
          })
          .catch((error) => console.error(error))
      }
    }

    const handleChange = (event) => {
      event.stopPropagation()

      if (
        event.key === drumpad ||
        event.key === drumpad.toLowerCase() ||
        event.type === 'click'
      ) {
        event.preventDefault()

        setName(names[bank ? 1 : 0])
        setClicked(true)
        play()
        setTimeout(() => setClicked(false), 150)

        console.log(`Key: ${drumpad}`)
        console.log(`Event: ${event.type}`)
      }
    }

    document.addEventListener('keydown', handleChange)
    button.addEventListener('click', handleChange)

    return () => {
      document.removeEventListener('keydown', handleChange)
      button.removeEventListener('click', handleChange)
    }
  }, [drumpad, sound, power, bank, clicked, names, setName])

  return (
    <button
      id={names[bank ? 1 : 0]}
      className={`drum-pad ${drumPadStyle.base} ${clicked ? drumPadStyle.clicked : drumPadStyle.notClicked}`}
      ref={ref}
      data-drumpad={drumpad}
    >
      {drumpad}
      <audio id={drumpad} className='clip' src={sound} />
    </button>
  )
}

DrumPad.propTypes = {
  drumpad: PropTypes.string.isRequired,
  sounds: PropTypes.arrayOf(PropTypes.string).isRequired,
  power: PropTypes.bool.isRequired,
  bank: PropTypes.bool.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  setName: PropTypes.func.isRequired
}

DrumPad.defaultProps = {
  sounds: ['', ''],
  power: true,
  bank: false,
  names: ['', ''],
  setName: () => {
    console.error('No callback functions provided!')
  }
}

export default DrumPad
