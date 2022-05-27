import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselItem from './CarouselItem';
import './Home.css'
import ProductsContainer from './ProductsContainer';

export default function Home() {

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const images = [
      'https://img.pixelz.com/blog/using-product-images-on-ecommerce-site/ecommerce-product-images-laptop.jpg?w=1000',
      'https://img.pixelz.com/blog/using-product-images-on-ecommerce-site/ecommerce-product-images-laptop.jpg?w=1000',
      'https://img.pixelz.com/blog/using-product-images-on-ecommerce-site/ecommerce-product-images-laptop.jpg?w=1000',
      'https://img.pixelz.com/blog/using-product-images-on-ecommerce-site/ecommerce-product-images-laptop.jpg?w=1000',
    ]

  return (
    <div className='caraousel_container'>
      <div className='gradient'></div>
      <Slider {...settings}>
        {images.map((p,i)=> (
          <CarouselItem key={i} img={p}/>
        ))}
      </Slider>

      <ProductsContainer/>
    </div>
  );
}