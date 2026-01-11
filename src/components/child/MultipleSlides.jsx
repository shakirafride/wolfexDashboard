import React from 'react'
import Slider from "react-slick";
const MultipleSlides = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <div className="col-sm-12">
            <div className="card p-0 overflow-hidden position-relative radius-12">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Multiple slides</h6>
                </div>
                <div className="card-body py-24 px-16 multiple-carousel dots-style-circle">
                    <Slider {...settings}>
                        <div className=" mb-24">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=370&h=300&fit=crop&crop=face"
                                className="w-100 h-100 object-fit-cover"
                                alt="Portrait Man White Background"
                            />
                        </div>
                        <div className=" mb-24">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=370&h=300&fit=crop&crop=face"
                                className="w-100 h-100 object-fit-cover"
                                alt="Young Professional Headshot"
                            />
                        </div>
                        <div className=" mb-24">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=370&h=300&fit=crop&crop=face"
                                className="w-100 h-100 object-fit-cover"
                                alt="Man Business Casual"
                            />
                        </div>
                        <div className=" mb-24">
                            <img
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=370&h=300&fit=crop&crop=face"
                                className="w-100 h-100 object-fit-cover"
                                alt="Confident Male Portrait"
                            />
                        </div>
                        <div className=" mb-24">
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=370&h=300&fit=crop&crop=face"
                                className="w-100 h-100 object-fit-cover"
                                alt="Professional Man Studio"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MultipleSlides