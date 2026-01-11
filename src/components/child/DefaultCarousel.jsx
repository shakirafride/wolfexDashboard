import React from 'react'
import Slider from "react-slick";
const DefaultCarousel = () => {
    const settings = {
        dots: false,
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
                    <h6 className="text-lg mb-0">Default Carousel</h6>
                </div>
                <div className="card-body p-0 default-carousel">
                    <Slider {...settings}>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=768&h=455&fit=crop&crop=face"
                                alt="Young Businessman"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-24 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Professional Business
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Discover professional business portraits from Freepik's collection. 
                                    Perfect for corporate presentations and marketing materials.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=768&h=455&fit=crop&crop=face"
                                alt="Confident Man"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-24 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Creative Professional
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    High-quality portraits of creative professionals for your design 
                                    projects and business communications.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=768&h=455&fit=crop&crop=face"
                                alt="Handsome Man with Glasses"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-24 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Modern Professional
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Modern professional portraits from Freepik's extensive 
                                    collection of business and lifestyle photography.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default DefaultCarousel