import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <Home />

        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  )
}
