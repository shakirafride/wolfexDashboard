import React, { useRef, useState } from 'react'
import Slider from "react-slick";
const CarouselWithProgress = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: (current) => setCurrentSlide(current),

    };

    const totalSlides = 4; // Update this based on the number of slides in your slider

    // Calculate progress percentage
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    return (
        <div className="col-sm-6">
            <div className="card p-0 overflow-hidden position-relative radius-12">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Carousel with progress</h6>
                </div>
                <div className="card-body p-0 position-relative">
                    <div className="p-0 progress-carousel dots-style-circle dots-positioned">
                        <Slider {...settings} ref={sliderRef}>
                            <div className="gradient-overlay bottom-0 start-0 h-100 position-relative">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=768&h=455&fit=crop&crop=face"
                                    alt="Professional Man in Navy Blazer"
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                    <h5 className="card-title text-white text-lg mb-6">
                                        Business Professional
                                    </h5>
                                    <p className="card-text text-white mx-auto text-sm">
                                        Professional business portraits from Freepik's premium 
                                        collection for corporate communications.
                                    </p>
                                </div>
                            </div>
                            <div className="gradient-overlay bottom-0 start-0 h-100">
                                <img
                                    src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=768&h=455&fit=crop&crop=face"
                                    alt="Smiling Man in Checkered Shirt"
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                    <h5 className="card-title text-white text-lg mb-6">
                                        Friendly Professional
                                    </h5>
                                    <p className="card-text text-white mx-auto text-sm">
                                        Friendly professional portraits perfect for customer-facing 
                                        business materials and marketing campaigns.
                                    </p>
                                </div>
                            </div>
                            <div className="gradient-overlay bottom-0 start-0 h-100">
                                <img
                                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=768&h=455&fit=crop&crop=face"
                                    alt="Young Man in Polo Shirt"
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                    <h5 className="card-title text-white text-lg mb-6">
                                        Modern Executive
                                    </h5>
                                    <p className="card-text text-white mx-auto text-sm">
                                        Modern executive portraits from Freepik's curated collection 
                                        for contemporary business communications.
                                    </p>
                                </div>
                            </div>
                            <div className="gradient-overlay bottom-0 start-0 h-100">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=768&h=455&fit=crop&crop=face"
                                    alt="Businessman in Formal Attire"
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                    <h5 className="card-title text-white text-lg mb-6">
                                        Corporate Executive
                                    </h5>
                                    <p className="card-text text-white mx-auto text-sm">
                                        Corporate executive portraits ideal for annual reports 
                                        and professional business presentations.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-progress">
                        <span className='active'
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselWithProgress