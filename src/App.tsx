import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { HeaderDefault } from './components/Header'
import { defaultTheme } from './defaultTheme'
import { GlobalStyle } from './global'
import { Blog } from './pages/Blog'
import { Profile } from './pages/Blog/components/Profile'


function App() {

  return (
    <BrowserRouter >
        <ThemeProvider theme={defaultTheme}>
          <HeaderDefault>
            <Profile />
          </HeaderDefault>
          <Blog />
          <GlobalStyle />
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
