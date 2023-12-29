import Footer from './footer'
import Meta from './meta'
import Header from "./header";

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Meta/>
      <Header/>
      <div className="min-h-screen ">
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
