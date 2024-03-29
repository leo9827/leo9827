import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={`Generated by ${CMS_NAME}.`}
      />
    </Head>
  )
}

export default Meta
