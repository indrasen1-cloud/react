import React from 'react'
import MenCollection from './Men\'sCollection'
import WomenCollection from './Women\'sCollection'
import KidsCollection from './Kid\'sCollection'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
     
      <div className='flex justify-center align-center gap-20'>
      <Link display="block" to="/product/menscollection">Men's Collection</Link>
      <Link display="block" to="/product/womenscollection">Women's Collection</Link>
      <Link display="block" to="/product/kidscollection">Kid's Wear</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product