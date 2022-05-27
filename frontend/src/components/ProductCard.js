import React from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import img from '../images/photo-1505740420928-5e560c06d30e.jfif'


export default function ProductCard() {
  return (
    <div className='product_card'>
      <h3>product card</h3>
      <img src={img} alt="" />
      <Link to='/product:id'>Shop Now</Link>
    </div>
  )
}
