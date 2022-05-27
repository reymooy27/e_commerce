import React from 'react'
import './CaraouselItem.css'

export default function CarouselItem({img}) {
  return (
    <div className='caraousel_item'>
      <img src={img} alt="" />
    </div>
  )
}
