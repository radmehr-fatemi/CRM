// Style
import '../styles/globals.scss'

//Component
import Layout from '../components/layout/Layout'
import ShowTitle from '../utils/ShowTitle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ShowTitle title="CRM" description="customize customers" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
