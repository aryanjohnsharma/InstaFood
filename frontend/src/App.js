import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import RestaurantList from "./components/RestaurantList";
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RestaurantMenu from './pages/RestaurantMenu';
import { CartProvider } from "./contexts/CartContent";
import CartPage from './pages/CartPage'
import PaymentPage from './pages/PaymentPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ProfilePage from './pages/ProfilePage';
import MyOrdersPage from './pages/MyOrderPage';
import OrderDetailsPage from './pages/OrderDetailsPage';


  //TESTING to check if we can retrive all restaurants or not: 
    // <div className="App">
    //   <h1>Food Delivery App</h1>
    //   <RestaurantList/> 
    //   {/* yes */}
    // </div>

function App() {
  return (
    <CartProvider>
        <Router>
          <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path = "signup" element = {<SignupPage/>}/>
            <Route path = "login" element = {<LoginPage/>}/>
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/restaurant/:restaurantId" element={<RestaurantMenu />} />
            <Route path='/cart' element={<CartPage/>}/>
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders" element={<MyOrdersPage />} />
            <Route path="/order/:id" element={<OrderDetailsPage />} />


          </Routes>
        </Router>
    </CartProvider>
    
    

  );
}

export default App;
