import DrumPad from './components/DrumPad'

const drumPads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

export default function App () {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div id='drum-machine'>
        {drumPads.map((drumPad, index) => (
          <DrumPad drumpad={drumPad} key={index} />
        ))}
      </div>
    </div>
  )
}
