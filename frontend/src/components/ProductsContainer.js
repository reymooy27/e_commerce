import React from 'react'
import ProductCard from './ProductCard';
import './ProductsContainer.css';

export default function ProductsContainer() {
  return (
    <div className='products_container'>
      {Array(9).fill(0).map((product, index)=>(
        <ProductCard key={index}/>
      ))}
    </div>
  )
}
