import React from 'react'
import Slider from "react-slick";

const CarouselWithPagination = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <div className="col-sm-6">
            <div className="card p-0 overflow-hidden position-relative radius-12">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Carousel With Pagination</h6>
                </div>
                <div className="card-body p-0 pagination-carousel dots-style-circle dots-positioned">
                    <Slider {...settings}>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=768&h=455&fit=crop&crop=face"
                                alt="Man in Blue Shirt"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Executive Portrait
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Executive business portraits from Freepik's professional 
                                    photography collection for corporate use.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=768&h=455&fit=crop&crop=face"
                                alt="Young Entrepreneur"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Entrepreneur Style
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Modern entrepreneur portraits perfect for startup and 
                                    business marketing materials from Freepik.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=768&h=455&fit=crop&crop=face"
                                alt="Confident Businessman"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Corporate Leader
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Corporate leadership portraits from Freepik's premium 
                                    business photography collection.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=768&h=455&fit=crop&crop=face"
                                alt="Man in Casual Hoodie"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Casual Professional
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Casual professional portraits ideal for modern workplace 
                                    and creative industry communications.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CarouselWithPagination