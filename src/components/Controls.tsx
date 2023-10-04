import useAppContext from '@/hooks/useAppContext'
import Switch from './Switch'

export default function Controls() {
  const { power, setPower, bank, setBank, name } = useAppContext()

  return (
    <div className='grid grid-cols-2 grid-rows-2 items-end justify-items-center font-medium sm:flex sm:flex-col sm:items-center sm:justify-between'>
      <div className='order-1 col-span-1 w-fit sm:order-none'>
        <p className='mb-1 text-center text-lg text-white'>Power</p>
        <Switch isOn={power} handleToggle={() => setPower(!power)} />
      </div>

      <div
        id='display'
        className='order-last col-span-2 flex h-12 w-full items-center justify-center rounded-md bg-white font-bold sm:order-none'
      >
        {`${name === '' ? "Let's play music!" : name}`}
      </div>

      <div className='order-1 col-span-1 w-fit sm:order-none'>
        <p className='mb-1 text-center text-lg text-white'>Bank</p>
        <Switch isOn={bank} handleToggle={() => setBank(!bank)} />
      </div>
    </div>
  )
}
