import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

export const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <div>Olá</div>

        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  )
}

