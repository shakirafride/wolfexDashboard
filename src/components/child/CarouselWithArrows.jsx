import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import Slider from "react-slick";



function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button onClick={onClick} type="button" className={`${className} slick-next slick-arrow`} style={{}}>
            <Icon icon="ic:outline-keyboard-arrow-right" className="menu-icon" />
        </button>

    );
}
function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (

        <button onClick={onClick} type="button" className={`${className} slick-prev slick-arrow`} style={{}}>
            <Icon icon="ic:outline-keyboard-arrow-left" className="menu-icon" />
        </button>

    );
}

const CarouselWithArrows = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="col-sm-6">
            <div className="card p-0 overflow-hidden position-relative radius-12">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Carousel With Arrows</h6>
                </div>
                <div className="card-body p-0 arrow-carousel">
                    <Slider {...settings}>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=768&h=455&fit=crop&crop=face"
                                alt="Young Man Portrait"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-24 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Business Portrait
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Professional business portraits from Freepik's premium collection 
                                    for corporate and marketing use.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=768&h=455&fit=crop&crop=face"
                                alt="Man in Denim Jacket"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-24 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Casual Professional
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Casual professional portraits perfect for modern business 
                                    communications and creative projects.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-overlay bottom-0 start-0 h-100">
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=768&h=455&fit=crop&crop=face"
                                alt="Serious Man in Black T-shirt"
                                className="w-100 h-100 object-fit-cover"
                            />
                            <div className="position-absolute start-50 translate-middle-x bottom-0 pb-24 z-1 text-center w-100 max-w-440-px">
                                <h5 className="card-title text-white text-lg mb-6">
                                    Creative Director
                                </h5>
                                <p className="card-text text-white mx-auto text-sm">
                                    Creative professional portraits from Freepik's curated 
                                    collection for design and marketing materials.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CarouselWithArrows