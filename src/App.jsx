import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import SingleProduct from "./pages/SingleProductPage"
import CartPage from "./pages/CartPage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
   <>
   <Toaster />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
   </>
  )
}
export default App