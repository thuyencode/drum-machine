import { useEffect, useRef, useState } from 'react'
import DrumPad from './components/DrumPad'
import Switch from './components/Switch'
import drumPads from './js/drumPadList'
import NavBar from './components/NavBar'

const App = () => {
  const ref = useRef(null)
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(false)
  const [name, setName] = useState('')
  const [size, setSize] = useState([])
  const [tabWidth, setTabWidth] = useState(0)

  useEffect(() => {
    setSize([ref.current.offsetHeight, ref.current.offsetWidth])
    setTabWidth(document.documentElement.clientWidth)

    const handleResize = () => {
      setTabWidth(document.documentElement.clientWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className='flex h-screen flex-col-reverse items-center justify-center gap-6 sm:flex-row'>
        <div
          id='drum-machine'
          className='m grid grid-cols-3 grid-rows-3 gap-2 rounded-md'
          ref={ref}
        >
          {drumPads.map(({ drumPad, sounds, names }, index) => (
            <DrumPad
              drumpad={drumPad}
              sounds={sounds}
              key={index}
              power={power}
              bank={bank}
              names={names}
              setName={setName}
            />
          ))}
        </div>

        <div
          className='grid grid-cols-2 grid-rows-2 items-end justify-items-center font-medium sm:flex sm:flex-col sm:items-center sm:justify-between'
          style={{
            height: tabWidth >= 640 ? size[0] : 'auto',
            width: size[1]
          }}
        >
          <div className='order-1 col-span-1 w-fit sm:order-none'>
            <p className='mb-1 text-center text-lg text-white'>Power</p>
            <Switch
              isOn={power}
              handleToggle={() => {
                setPower(!power)
                console.log(`Power: ${!power}`)
              }}
            />
          </div>

          <div
            id='display'
            className='order-last col-span-2 flex h-12 w-full items-center justify-center rounded-md bg-white font-bold sm:order-none'
          >
            {`${name === '' ? "Let's play music!" : name}`}
          </div>

          <div className='order-1 col-span-1 w-fit sm:order-none'>
            <p className='mb-1 text-center text-lg text-white'>Bank</p>
            <Switch
              isOn={bank}
              handleToggle={() => {
                setBank(!bank)
                console.log(`Bank: ${!bank}`)
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
