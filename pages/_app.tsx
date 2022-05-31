import '../styles/globals.scss'
import { TAppPropsWithLayout } from '../types'

function MyApp({ Component, pageProps }: TAppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
