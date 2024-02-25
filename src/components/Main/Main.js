import React from 'react'
import BannerSlide from '../Slider/BannerSlide'
import Newmovieslide from '../Slider/Newmovieslide'
import CategorySilde from '../Slider/CategorySilde'

const Main = () => {
  return (
    <div className='text-white'>
       <BannerSlide/>
       <Newmovieslide/>
       <CategorySilde/>
    </div>
  )
}

export default Main