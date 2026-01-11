import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const DefaultCard = () => {
    return (
        <div className="mb-40">
            <div className="row gy-4">
                <div className="col-xxl-3 col-sm-6">
                    <div className="card h-100 radius-12 shadow-sm">
                        <img
                            src="https://img.freepik.com/free-photo/modern-office-space-with-desks-chairs_23-2149178628.jpg"
                            className="card-img-top"
                            alt="Modern Workspace"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body p-16">
                            <h5 className="card-title text-lg text-primary-light mb-6">
                                Modern Workspace Design
                            </h5>
                            <p className="card-text text-neutral-600">
                                Discover innovative workspace solutions that boost productivity and creativity. 
                                Transform your office into a modern, efficient environment.
                            </p>
                            <Link
                                to="#"
                                className="btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2"
                            >
                                Read More{" "}
                                <Icon
                                    icon="iconamoon:arrow-right-2"
                                    className="text-xl"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card h-100 radius-12 shadow-sm">
                        <img
                            src="https://img.freepik.com/free-photo/business-team-meeting-conference-room_23-2149178542.jpg"
                            className="card-img-top"
                            alt="Team Collaboration"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body p-16 text-center">
                            <h5 className="card-title text-lg text-primary-light mb-6">
                                Team Collaboration
                            </h5>
                            <p className="card-text text-neutral-600">
                                Enhance team productivity with effective collaboration strategies. 
                                Build stronger connections and achieve better results together.
                            </p>
                            <Link
                                to="#"
                                className="btn btn-primary-600 px-12 py-10 d-inline-flex align-items-center gap-2"
                            >
                                Read More{" "}
                                <Icon
                                    icon="iconamoon:arrow-right-2"
                                    className="text-xl"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card h-100 radius-12 shadow-sm">
                        <img
                            src="https://img.freepik.com/free-photo/digital-marketing-concept-with-laptop-charts_23-2149178456.jpg"
                            className="card-img-top"
                            alt="Digital Marketing"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body p-16 text-end">
                            <h5 className="card-title text-lg text-primary-light mb-6">
                                Digital Marketing Strategy
                            </h5>
                            <p className="card-text text-neutral-600">
                                Master the art of digital marketing with proven strategies. 
                                Reach your target audience and grow your business online.
                            </p>
                            <div className="d-flex flex-wrap align-items-center justify-content-end gap-3">
                                <Link
                                    to="#"
                                    className="btn btn-primary-100 text-white text-primary-600 px-12 py-10 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <Icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </Link>
                                <button className="btn btn-warning-100 text-white text-warning-600 px-12 py-10 d-inline-flex align-items-center gap-2">
                                    Book Mark{" "}
                                    <Icon icon="bx:bookmark-minus" className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card h-100 radius-12 shadow-sm">
                        <img
                            src="https://img.freepik.com/free-photo/creative-design-process-with-tools-materials_23-2149178389.jpg"
                            className="card-img-top"
                            alt="Creative Design"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body p-16 text-center">
                            <h5 className="card-title text-lg text-primary-light mb-6">
                                Creative Design Process
                            </h5>
                            <p className="card-text text-neutral-600">
                                Explore the creative design process from concept to completion. 
                                Learn professional techniques and industry best practices.
                            </p>
                            <button className="btn btn-primary-600 px-12 py-10 d-inline-flex align-items-center gap-2">
                                <Icon
                                    icon="iconamoon:arrow-right-2"
                                    className="text-xl"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultCard