import useAppContext from '@/hooks/useAppContext'
import { useCallback, useEffect, useRef, useState } from 'react'
import { drumPadStyle } from '../constants/styles'

type DrumPadProps = {
  drumPad: string
  sounds: ReadonlyArray<string>
  names: ReadonlyArray<string>
}

const DrumPad = ({
  drumPad,
  sounds = ['', ''],
  names = ['', ''],
}: DrumPadProps) => {
  const { power = true, bank = false, setName } = useAppContext()

  const ref = useRef<HTMLButtonElement | null>(null)
  const [clicked, setClicked] = useState(false)

  const sound = sounds[bank ? 1 : 0]
  const name = names[bank ? 1 : 0]

  const play = useCallback(
    (audio: HTMLAudioElement) => {
      if (power === false) return

      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => console.error(error))
      }
    },
    [power]
  )

  useEffect(() => {
    const button = ref.current

    if (button == null) return

    const audio = button.children[0] as HTMLAudioElement

    const handleMouseEvent = (event: MouseEvent) => {
      event.stopPropagation()

      setName(name)
      setClicked(true)
      play(audio)
      setTimeout(() => setClicked(false), 150)
    }

    const handleKeyboardEvent = (event: KeyboardEvent) => {
      event.stopPropagation()

      if (event.key === drumPad || event.key === drumPad.toLowerCase()) {
        event.preventDefault()

        setName(name)
        setClicked(true)
        play(audio)
        setTimeout(() => setClicked(false), 150)
      }
    }

    document.addEventListener('keydown', handleKeyboardEvent)
    button.addEventListener('click', handleMouseEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyboardEvent)
      button.removeEventListener('click', handleMouseEvent)
    }
  }, [drumPad, name, play, setName])

  return (
    <button
      id={names[bank ? 1 : 0]}
      className={`drum-pad ${drumPadStyle.base} ${
        clicked ? drumPadStyle.clicked : drumPadStyle.notClicked
      }`}
      ref={ref}
      data-drumpad={drumPad}
    >
      {drumPad}
      <audio id={drumPad} className='clip' src={sound} />
    </button>
  )
}

export default DrumPad
