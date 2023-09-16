import GraphQlProvider from '../lib/provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  <GraphQlProvider>
            <Component {...pageProps} />
          </GraphQlProvider>
}

export default MyApp
