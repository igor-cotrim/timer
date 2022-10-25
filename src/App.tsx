import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CyclesContextProvider } from './contexts'
import Router from './Router'

import { GlobalStyle, defaultTheme } from './styles'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
