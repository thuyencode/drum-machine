import Controls from './Controls'
import DrumPads from './DrumPads'

export default function Main() {
  return (
    <main className='flex h-screen items-center justify-center '>
      <div className='flex flex-col-reverse gap-6 sm:grid sm:grid-cols-2 sm:grid-rows-1'>
        <DrumPads />
        <Controls />
      </div>
    </main>
  )
}
