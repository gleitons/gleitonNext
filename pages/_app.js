import '../styles/globals.css'
import Analytcs from '../components/Analytcs'

function MyApp({ Component, pageProps }) {
  return <Analytcs>
        <Component {...pageProps} />
        </Analytcs>
  }

export default MyApp
