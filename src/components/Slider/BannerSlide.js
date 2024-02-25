import React from 'react'
import Slider from "react-slick";
import { moviesBannerData } from '../../Datas';
const BannerSlide = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <div className='slider-container'>
                <Slider {...settings}>
                    {
                        moviesBannerData.map((currEle, index) => {
                            return (
                                <>
                                    <div className='row'>
                                        <div className='col-md-4 col-lg-4 d-flex align-items-center'>
                                            <div className='movie_content p-5'>
                                                <h2>{currEle.title}</h2>
                                                <div className='description'>
                                                    <p>{currEle.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-lg-8'>
                                            <img src={currEle.image} className='img-fluid' />

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </Slider>
            </div>
        </div>
    )
}

export default BannerSlide