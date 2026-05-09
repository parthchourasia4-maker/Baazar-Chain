import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MyOrders from './pages/MyOrders';
import SellerDashboard from './pages/SellerDashboard';
import Deals from './pages/Deals';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/cart/CartDrawer';

function App() {
  return (
    <CartProvider>
      <Router>
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
