import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Router from './Router'
import { GlobalStyle, defaultTheme } from './styles'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
