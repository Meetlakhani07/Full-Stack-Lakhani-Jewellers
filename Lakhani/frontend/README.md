1. Project Structure 


JewelleryShop/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── orderController.js
│   │   ├── productCategoryController.js
│   │   ├── productController.js
│   │   ├── shopInfoController.js
│   │   └── wishlistController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   ├── ProductCategory.js
│   │   ├── ShopInfo.js
│   │   ├── User.js
│   │   └── Wishlist.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   ├── shopInfoRoutes.js
│   │   └── wishlistRoutes.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── images/
│   │   ├── banner/
│   │   ├── blog/
│   │   ├── earrings/
│   │   ├── icon/
│   │   ├── logo/
│   │   ├── nav-product/
│   │   ├── product/
│   │   ├── slider/
│   │   └── social/
│   ├── node_modules/
│   ├── public/
│   │   ├── LJ_logo (2).png
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   └── AdminSidebar.jsx
│   │   │   ├── home/
│   │   │   │   ├── BannerSection.jsx
│   │   │   │   ├── BestsellingProducts.jsx
│   │   │   │   ├── FeaturedProducts.jsx
│   │   │   │   ├── HeroSlider.jsx
│   │   │   │   └── SpecialCollection.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Header.jsx
│   │   │   └── products/
│   │   │       └── ProductCard.jsx
│   │   ├── context/
│   │   │   ├── AdminRoutes.jsx
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx
│   │   │   ├── PublicRoutes.jsx
│   │   │   └── WishlistContext.jsx
│   │   ├── pages/
│   │   │   ├── Admin/
│   │   │   │   ├── AdminCategories.jsx
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── AdminOrderDetail.jsx
│   │   │   │   ├── AdminOrders.jsx
│   │   │   │   ├── AdminProductAdd.jsx
│   │   │   │   ├── AdminProductEdit.jsx
│   │   │   │   ├── AdminProducts.jsx
│   │   │   │   └── AdminShopInfo.jsx
│   │   │   ├── AboutUsPage.jsx
│   │   │   ├── AccountPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── CheckoutPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── MyOrders.jsx
│   │   │   ├── OrderConfirmationPage.jsx
│   │   │   ├── OrderPage.jsx
│   │   │   ├── ProductDetailPage.jsx
│   │   │   ├── ProductsPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── Wishlist.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js



2. Backend Setup

cd backend path
npm install
cp .env.example .env # configure your environment variables
node run dev


3. Frontend Setup

cd frontend path
npm install
node server.js


4. Environment Variables 

PORT=3700
MONGO_URI= mongodb+srv://Meet123:Meet123@cluster0.ed5qk.mongodb.net/jewellary-shop
JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VySWQiOiIxMjM0NSIsInVzZXJuYW1lIjoia2FyYW5tb2RpIiwiZW1haWwiOiJrYXJhbm1vZGkzMjgyQGdtYWlsLmNvbSIsImlhdCI6MTcxNDkxNjc4OCwiZXhwIjoxNzE0OTIzOTg4fQ.kKz8yXcb1AzYuGVRS9MO0WSXWylJSdbqms9N-LZMpqQ


5. License

MIT License


6. Auther 

Meet Lakhani