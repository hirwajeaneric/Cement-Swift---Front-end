/* eslint-disable react/prop-types */
import Footer from "../../components/sections/Footer"
import NavigationBar from "../../components/sections/NavigationBar"

export default function ClientPageLayout({children}) {
  return (
    <>
        <NavigationBar />
        {children}
        <Footer />
    </>
  )
}