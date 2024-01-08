import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./pages/client_pages/Home"
import AdminPanelMain from "./pages/admin_pages/AdminPanelMain"
import MainPage from "./pages/client_pages/MainPage"
import Signup from "./pages/client_pages/Signup"
import Login from "./pages/client_pages/Login"
import Success from "./pages/client_pages/Success"
import NotFound from "./pages/client_pages/NotFound"
import ProductDetails from "./pages/client_pages/ProductDetails"
import Cart from "./pages/client_pages/Cart"
import Checkout from "./pages/client_pages/Checkout"
import Account from "./pages/client_pages/Account"
import Purchases from "./pages/client_pages/Purchases"
import MyOrders from "./pages/client_pages/MyOrders"
import PersonalInformation from "./pages/client_pages/PersonalInformation"
import Logout from "./pages/client_pages/Logout"
import ProductSearch from "./pages/client_pages/ProductSearch"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Client routes  */}
        <Route path="/" element={<MainPage />}>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="success" element={<Success />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="products" element={<ProductSearch />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="logout" element={<Logout />} />
          <Route path="account" element={<Account />}>
            <Route path="" element={<PersonalInformation />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="orders" element={<MyOrders />} />
          </Route>
          
        </Route>

        {/* Admin Dashboard routes  */}
        <Route path="/dashboard" element={<AdminPanelMain />} />
      </Routes>
    </Router>
  )
}

export default App 