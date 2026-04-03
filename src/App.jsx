import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Products from './Page/Products'
import Gallery from './Page/Gallery'
import Blog from './Page/Blog'
import Team from './Page/Team'
import Contact from './Page/Contact'
import Navbar1 from './Component/Navbar1'
import Navbar from './Component/Navbar'
import Navbar3 from './Component/Navbar3'
import Direction from './Component/Direction'
import Footer from './Component/Footer'
import Footer2 from './Component/Footer2'
import Footer3 from './Component/Footer3'
import Footer4 from './Component/Footer4'
import Profile from './Page/Profile'
import MyAccount from './Page/MyAccount'
import WishList from './Page/WishList'
import ScrollToTop from "./Component/ScrollToTop";
import AddDeliveryAddress from './Page/AddDeliveryAddress'
import Payment from './Page/Payment'
import OrderSumary from './Page/OrderSumary'

const App = () => {
  const [card,setCard] = useState([])
  const [formData, setFormData] = useState({
      name: '',
      mobile: '',
      pincode: '',
      address: '',
      city: '',
      state: '',
      addressType: 'home'
    })
   
  return (
    <Router >
      {/* <Navbar1/> */}
      <ScrollToTop /> 
      <Navbar card = {card} setCard = {setCard} />
      
     {/* <Navbar3/>
      */}
      {/* <Direction/> */}
      <Routes>
        <Route path='/' element={<Home card = {card} setCard ={setCard}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products  card ={card} setCard={setCard}/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/myaccount' element={<MyAccount/>}></Route>
        <Route path='/wishlist' element={<WishList card = {card} setCard = {setCard}/>}></Route>
        <Route path='/addDeliveryAddress' element={<AddDeliveryAddress formData ={formData} setFormData={setFormData}/>}></Route>
        <Route path='/orderSumary' element={<OrderSumary card = {card} setCard = {setCard} formData ={formData} setFormData={setFormData}/>}></Route>
        <Route path='/payment' element={<Payment card = {card} setCard = {setCard}/>}></Route>

      </Routes>
      <Footer2/>
      {/* <Footer/> */}
     
      {/* <Footer3/>
      <Footer4/> */}
      {/* <Footer5/> */} 
    </Router>
  )
}

export default App























