import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCard = () => {
    return (
        <div className="mb-40">
            <h6 className="mb-24">Horizontal Card</h6>
            <div className="row gy-4">
                <div className="col-xl-6">
                    <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row">
                        <div className="d-flex flex-shrink-0 w-170-px h-100">
                            <img
                                src="https://img.freepik.com/free-photo/creative-design-workspace-setup_23-2149429178.jpg"
                                className="h-100 w-100 object-fit-cover"
                                alt="Creative Design Workspace"
                            />
                        </div>
                        <div className="card-body p-16 flex-grow-1">
                            <h5 className="card-title text-lg text-primary-light mb-6">
                                Creative Design Solutions
                            </h5>
                            <p className="card-text text-neutral-600 mb-16">
                                Discover Freepik's extensive collection of design resources. From vectors 
                                to photos, find everything you need to bring your creative vision to life 
                                with professional quality assets.
                            </p>
                            <Link
                                to="#"
                                className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
                            >
                                Explore Now{" "}
                                <Icon
                                    icon="iconamoon:arrow-right-2"
                                    className="text-xl"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row flex-row-reverse">
                        <div className="d-flex flex-shrink-0 w-170-px h-100">
                            <img
                                src="https://img.freepik.com/free-photo/business-team-collaboration-meeting_23-2149429234.jpg"
                                className="h-100 w-100 object-fit-cover"
                                alt="Business Team Collaboration"
                            />
                        </div>
                        <div className="card-body p-16 flex-grow-1">
                            <h5 className="card-title text-lg text-primary-light mb-6">
                                Team Collaboration Tools
                            </h5>
                            <p className="card-text text-neutral-600 mb-16">
                                Enhance team productivity with Freepik's collaborative design platform. 
                                Share projects, gather feedback, and work together seamlessly on 
                                creative initiatives.
                            </p>
                            <Link
                                to="#"
                                className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
                            >
                                Start Collaborating{" "}
                                <Icon
                                    icon="iconamoon:arrow-right-2"
                                    className="text-xl"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row">
                        <div className="d-flex flex-shrink-0 w-170-px h-100">
                            <img
                                src="https://img.freepik.com/free-photo/digital-marketing-analytics-dashboard_23-2149429267.jpg"
                                className="h-100 w-100 object-fit-cover"
                                alt="Digital Marketing Analytics"
                            />
                        </div>
                        <div className="card-body p-16 flex-grow-1">
                            <h5 className="card-title text-lg text-primary-light mb-6">
                                Marketing Analytics Hub
                            </h5>
                            <p className="card-text text-neutral-600 mb-16">
                                Track your design performance with Freepik's analytics tools. 
                                Monitor downloads, engagement, and optimize your creative content 
                                for maximum impact and reach.
                            </p>
                            <Link
                                to="#"
                                className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
                            >
                                View Analytics{" "}
                                <Icon
                                    icon="iconamoon:arrow-right-2"
                                    className="text-xl"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row flex-row-reverse">
                        <div className="d-flex flex-shrink-0 w-170-px h-100">
                            <img
                                src="https://img.freepik.com/free-photo/premium-design-resources-showcase_23-2149429298.jpg"
                                className="h-100 w-100 object-fit-cover"
                                alt="Premium Design Resources"
                            />
                        </div>
                        <div className="card-body p-16 flex-grow-1">
                            <h5 className="card-title text-lg text-primary-light mb-6">
                                Premium Resource Library
                            </h5>
                            <p className="card-text text-neutral-600 mb-16">
                                Access exclusive premium content from Freepik's curated collection. 
                                Unlock high-quality designs, templates, and assets that set your 
                                projects apart from the competition.
                            </p>
                            <Link
                                to="#"
                                className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
                            >
                                Go Premium{" "}
                                <Icon
                                    icon="iconamoon:arrow-right-2"
                                    className="text-xl"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard