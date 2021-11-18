import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { loadingContext } from '../context/loading'
import { userContext } from '../context/userContext'
import { user, setUser } from '../context/userContext'
import { theme } from '../theme'
import { loading, setLoading } from '../context/loading'
import { useEffect } from 'react'// return and finish page transitions
import { useRouter } from 'next/router' //

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      
    }
    const handleStop = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return (
    <loadingContext.Provider value ={{ loading, setLoading }}>
    <userContext.Provider value={{ user, setUser }} >
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </userContext.Provider>
    </loadingContext.Provider>
  )
}
export default MyApp
