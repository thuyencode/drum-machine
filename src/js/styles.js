export const drumPadStyle = {
  base: 'box-border rounded-md px-7 py-5 text-lg font-bold drop-shadow-xl focus-visible:shadow-none focus-visible:outline-none',
  notClicked: 'bg-white text-gray-950 hover:bg-blue-400 hover:text-white',
  clicked: 'bg-blue-500 text-white'
}

export const switchContainerStyle = {
  base: 'box-content flex h-6 w-12 cursor-pointer items-center rounded-full p-1',
  on: 'bg-blue-500',
  off: 'bg-white'
}

export const switchStyle = {
  base: 'h-5 w-5 transform rounded-full bg-gray-950 shadow-md',
  on: 'bg-white shadow-md',
  off: 'translate-x-7 bg-gray-950 shadow-none'
}
