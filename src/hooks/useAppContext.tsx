import { AppContext } from '@/contexts/ContextProvider'
import { useContext } from 'react'

export default function useAppContext() {
  const context = useContext(AppContext)

  if (context == null) {
    throw new Error('useAppContext must be used within a ContextProvider')
  }

  return context
}
