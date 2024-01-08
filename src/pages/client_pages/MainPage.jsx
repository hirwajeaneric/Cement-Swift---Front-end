import Footer from '../../components/sections/Footer'
import NavigationBar from '../../components/sections/NavigationBar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainPage