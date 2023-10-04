import { switchContainerStyle, switchStyle } from '@/constants/styles'

type SwitchProps = {
  isOn: boolean
  handleToggle: () => void
}

export default function Switch({ isOn = true, handleToggle }: SwitchProps) {
  return (
    <div
      onClick={handleToggle}
      className={`${switchContainerStyle.base} ${
        isOn ? switchContainerStyle.on : switchContainerStyle.off
      }`}
    >
      <div
        className={`${switchStyle.base} ${
          isOn ? switchStyle.on : switchStyle.off
        }`}
      />
    </div>
  )
}
