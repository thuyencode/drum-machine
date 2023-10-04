import Main from './components/Main'
import NavBar from './components/NavBar'
import { AppContextProvider } from './contexts/ContextProvider'

const App = () => {
  return (
    <>
      <NavBar />
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </>
  )
}

export default App
