import '../styles/globals.css'
import "@material-tailwind/react/tailwind.css";
import type { AppProps } from 'next/app'
import '../style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
