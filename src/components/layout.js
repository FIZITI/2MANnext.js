import Navbar from './navbar';
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main className="md:padding-content slm:low-padding-content">{children}</main>
      <Footer></Footer>
    </>
  )
}