import drumPads from '@/constants/drumPadsList'
import DrumPad from './DrumPad'

export default function DrumPads() {
  return (
    <div
      id='drum-machine'
      className='grid grid-cols-3 grid-rows-3 gap-2 rounded-md'
    >
      {drumPads.map(({ drumPad, sounds, names }) => (
        <DrumPad
          drumPad={drumPad}
          sounds={sounds}
          names={names}
          key={drumPad}
        />
      ))}
    </div>
  )
}
