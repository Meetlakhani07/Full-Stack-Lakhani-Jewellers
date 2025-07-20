import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Public Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import OrderPage from "./pages/OrderPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import MyOrders from "./pages/MyOrders";
import AboutUsPage from "./pages/AboutUsPage";
import WishList from "./pages/Wishlist";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminOrders from "./pages/Admin/AdminOrders.jsx";
import AdminOrderDetail from "./pages/Admin/AdminOrderDetail.jsx";
import AdminProducts from "./pages/Admin/AdminProducts.jsx";
import AdminProductEdit from "./pages/Admin/AdminProductEdit.jsx";
import AdminCategories from "./pages/Admin/AdminCategories.jsx";
import AdminShopInfo from "./pages/Admin/AdminShopInfo.jsx";
import AdminProductAdd from "./pages/Admin/AdminProductAdd.jsx";

// Route Protection
import AdminRoute from "./context/AdminRoutes";

function App() {
  return (
    <div className="home_black_version">
      <Header />

      <main className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route
            path="/order-confirmation/:id"
            element={<OrderConfirmationPage />}
          />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <AdminRoute>
                <AdminOrders />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/orders/:id"
            element={
              <AdminRoute>
                <AdminOrderDetail />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <AdminRoute>
                <AdminProducts />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/products/new"
            element={
              <AdminRoute>
                <AdminProductAdd />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/products/:id"
            element={
              <AdminRoute>
                <AdminProductEdit />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/categories"
            element={
              <AdminRoute>
                <AdminCategories />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/shop-info"
            element={
              <AdminRoute>
                <AdminShopInfo />
              </AdminRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
