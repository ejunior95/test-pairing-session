import { Router } from './routes'
import { SystemProvider } from './context/SystemContext'

const App = () => {
  return (
    <SystemProvider>
      <Router />
    </SystemProvider>
  )
}

export default App
