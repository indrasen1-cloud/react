import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Product from './Components/Product'
import Footer from './Components/Footer'
import MenCollection from './Components/Men\'sCollection'
import WomenCollection from './Components/Women\'sCollection'
import KidsCollection from './Components/Kid\'sCollection'
import ContactDetails from './Components/ContactDetails'

const App = () => {
  return (
    <div>
      <div className='navbar'>
        <h2>Indrasen</h2>
        <div className='link'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/contact/:id" element={<ContactDetails/>}/>

        <Route  path="/product" element={<Product/>}>
        <Route path="menscollection" element={<MenCollection/>}/>
        <Route path="womenscollection" element={<WomenCollection/>}/>
        <Route path="kidscollection" element={<KidsCollection/>}/>
        </Route>

        <Route  path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>

  

    </div>
  )
}

export default App