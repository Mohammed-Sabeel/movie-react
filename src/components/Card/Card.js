import React from 'react'
import { useEffect } from 'react';
import Slider from "react-slick";
const Card = ({ data }) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 9,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 9,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };


    console.log(data, "this new data")
    return (
        <div className='my-2'>
            {
                data.length > 0 ?
                    <>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {
                                    data.map((currEle, index) => {
                                        return (
                                            <>
                                                <div>

                                                    <div className='card'>
                                                        <div className='card-body p-0'>
                                                            <img src={currEle.images} className="w-100 h-100 img_latest img-fluid" />
                                                        </div>
                                                    </div>

                                                </div>

                                            </>
                                        )
                                    })
                                }

                            </Slider>
                        </div>
                    </> : <div className='text-white'>Loading</div>
            }





        </div>
    )
}

export default Card