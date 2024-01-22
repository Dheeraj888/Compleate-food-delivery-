import React from 'react'
import "./styles/App.scss"
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Header from './components/layout/Header'
import Home from './components/home/Home'
import Footer from './components/home/Footer'
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import PaymentSuccess from './components/cart/PaymentSuccess'
import Shipping from './components/cart/Shipping'
import Profile from './components/profile/Profile'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Login from './components/login/Login'
import MyOrders from './components/myOrders/MyOrders'
import { OrderDetails } from './components/myOrders/OrderDetails'
import Dashboard from './components/admin/Dashboard'
import User from './components/admin/User'
import Orders from './components/admin/Orders'
import About from './components/about/About'




import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/orderdetails.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"
import "./styles/Footer.scss"
import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/login.scss"
import "./styles/shipping.scss"
import "./styles/confirmOrder.scss"
import "./styles/paymentSuccess.scss"
import "./styles/profile.scss"
import "./styles/table.scss"
import "./styles/dashboard.scss"
import "./styles/about.scss"





const App = () => {
  return (
    <div>
      <Router>
        <Header isAuthantacitated={true}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/confirmOrder' element={<ConfirmOrder/>}/>
          <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/me' element={<Profile/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/order/:id' element={<OrderDetails/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/users' element={<User/>}/>
          <Route path='/admin/orders' element={<Orders/>}/>
          <Route path='/about' element={<About/>}/>

         
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App