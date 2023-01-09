import '../styles/globals.css'
import Analytcs from '../components/Analytcs'
import '../styles/Ham.module.css'

function MyApp({ Component, pageProps }) {
  return <Analytcs>
        <Component {...pageProps} />
        </Analytcs>
  }

export default MyApp
