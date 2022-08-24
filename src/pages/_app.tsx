import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import SiteHeader from 'components/Layouts/Header/SiteHeader'
import Footer from "../components/Layouts/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <SiteHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
