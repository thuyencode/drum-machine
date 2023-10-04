import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from 'react'

type AppContextType = {
  power: boolean
  bank: boolean
  name: string
  setPower: Dispatch<SetStateAction<boolean>>
  setBank: Dispatch<SetStateAction<boolean>>
  setName: Dispatch<SetStateAction<string>>
}

export const AppContext = createContext<AppContextType | null>(null)

export function AppContextProvider({ children }: { children: ReactElement }) {
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(false)
  const [name, setName] = useState('')

  return (
    <AppContext.Provider
      value={{ power, setPower, bank, setBank, name, setName }}
    >
      {children}
    </AppContext.Provider>
  )
}
