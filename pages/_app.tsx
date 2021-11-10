import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { userContext } from '../context/userContext'
import { user, setUser } from '../context/userContext'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <userContext.Provider value={{ user, setUser }} >
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </userContext.Provider>
  )
}
export default MyApp
