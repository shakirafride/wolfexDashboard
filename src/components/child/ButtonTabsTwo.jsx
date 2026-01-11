import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const ButtonTabsTwo = () => {
    return (

        <div className="col-xxl-6">
            <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Button Tabs</h6>
                </div>
                <div className="card-body p-24 pt-10">
                    <ul
                        className="nav button-tab nav-pills mb-16"
                        id="pills-tab-four"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link d-flex align-items-center gap-2 fw-semibold text-primary-light radius-4 px-16 py-10 active"
                                id="pills-button-icon-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-button-icon-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-button-icon-home"
                                aria-selected="true"
                            >
                                <Icon
                                    icon="solar:home-smile-angle-outline"
                                    className="text-xl"
                                />
                                <span className="line-height-1">Home</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link d-flex align-items-center gap-2 fw-semibold text-primary-light radius-4 px-16 py-10"
                                id="pills-button-icon-details-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-button-icon-details"
                                type="button"
                                role="tab"
                                aria-controls="pills-button-icon-details"
                                aria-selected="false"
                            >
                                <Icon
                                    icon="hugeicons:folder-details"
                                    className="text-xl"
                                />
                                <span className="line-height-1">Details</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link d-flex align-items-center gap-2 fw-semibold text-primary-light radius-4 px-16 py-10"
                                id="pills-button-icon-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-button-icon-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-button-icon-profile"
                                aria-selected="false"
                            >
                                <Icon icon="iconamoon:profile" className="text-xl" />
                                <span className="line-height-1">Profile</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link d-flex align-items-center gap-2 fw-semibold text-primary-light radius-4 px-16 py-10"
                                id="pills-button-icon-settings-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-button-icon-settings"
                                type="button"
                                role="tab"
                                aria-controls="pills-button-icon-settings"
                                aria-selected="false"
                            >
                                <Icon icon="uil:setting" className="text-xl" />
                                <span className="line-height-1">Settings</span>
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tab-fourContent">
                        <div
                            className="tab-pane fade show active"
                            id="pills-button-icon-home"
                            role="tabpanel"
                            aria-labelledby="pills-button-icon-home-tab"
                            tabIndex={0}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://picsum.photos/120/80?random=5"
                                        className="radius-8"
                                        alt="Home Dashboard"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg mb-8">Creative Dashboard</h6>
                                    <p className="text-secondary-light mb-16">
                                        Access your personalized creative dashboard with Freepik's latest 
                                        design trends, featured collections, and recommended resources 
                                        tailored to your creative style and project needs.
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        Stay updated with the latest design trends and discover new 
                                        creative possibilities for your projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-button-icon-details"
                            role="tabpanel"
                            aria-labelledby="pills-button-icon-details-tab"
                            tabIndex={0}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://picsum.photos/120/80?random=6"
                                        className="radius-8"
                                        alt="Project Details"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg mb-8">Resource Details</h6>
                                    <p className="text-secondary-light mb-16">
                                        Dive deep into resource specifications with detailed metadata, 
                                        usage guidelines, and licensing information from Freepik's 
                                        comprehensive database of creative assets.
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        Understanding resource details ensures proper usage and 
                                        maximizes the impact of your creative projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-button-icon-profile"
                            role="tabpanel"
                            aria-labelledby="pills-button-icon-profile-tab"
                            tabIndex={0}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://picsum.photos/120/80?random=7"
                                        className="radius-8"
                                        alt="Creative Profile"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg mb-8">Creative Portfolio</h6>
                                    <p className="text-secondary-light mb-16">
                                        Showcase your creative journey with Freepik's portfolio tools. 
                                        Display your best work, track your design evolution, and 
                                        connect with fellow creatives in our global community.
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        Build a compelling portfolio that reflects your unique 
                                        creative vision and professional expertise.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-button-icon-settings"
                            role="tabpanel"
                            aria-labelledby="pills-button-icon-settings-tab"
                            tabIndex={0}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://picsum.photos/120/80?random=8"
                                        className="radius-8"
                                        alt="Advanced Settings"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg mb-8">Advanced Configuration</h6>
                                    <p className="text-secondary-light mb-16">
                                        Configure advanced settings to optimize your Freepik experience. 
                                        Customize download preferences, set up integrations, and manage 
                                        your creative workflow with powerful automation tools.
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        Advanced settings give you complete control over your 
                                        creative environment and workflow optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonTabsTwo