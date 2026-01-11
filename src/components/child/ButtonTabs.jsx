import React from 'react'

const ButtonTabs = () => {
    return (
        <div className="col-xxl-6">
            <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Button Tabs</h6>
                </div>
                <div className="card-body p-24 pt-10">
                    <ul
                        className="nav button-tab nav-pills mb-16"
                        id="pills-tab-three"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10 active"
                                id="pills-button-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-button-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-button-home"
                                aria-selected="true"
                            >
                                Home
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10"
                                id="pills-button-details-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-button-details"
                                type="button"
                                role="tab"
                                aria-controls="pills-button-details"
                                aria-selected="false"
                            >
                                Details
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10"
                                id="pills-button-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-button-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-button-profile"
                                aria-selected="false"
                            >
                                Profile
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10"
                                id="pills-button-settings-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-button-settings"
                                type="button"
                                role="tab"
                                aria-controls="pills-button-settings"
                                aria-selected="false"
                            >
                                Settings
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tab-threeContent">
                        <div
                            className="tab-pane fade show active"
                            id="pills-button-home"
                            role="tabpanel"
                            aria-labelledby="pills-button-home-tab"
                            tabIndex={0}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://picsum.photos/120/80?random=1"
                                        className="radius-8"
                                        alt="Home Content"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg mb-8">Welcome Home</h6>
                                    <p className="text-secondary-light mb-16">
                                        Discover amazing design resources from Freepik's home collection. 
                                        Our platform offers millions of high-quality graphics, photos, and 
                                        vectors to enhance your creative projects and bring your ideas to life.
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        Transform your designs with professional assets that inspire 
                                        creativity and drive engagement across all your projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-button-details"
                            role="tabpanel"
                            aria-labelledby="pills-button-details-tab"
                            tabIndex={0}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://picsum.photos/120/80?random=2"
                                        className="radius-8"
                                        alt="Details Content"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg mb-8">Project Details</h6>
                                    <p className="text-secondary-light mb-16">
                                        Explore comprehensive project details and specifications from Freepik's 
                                        extensive library. Get access to detailed information about design 
                                        elements, usage rights, and creative guidelines for your projects.
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        Every detail matters when creating exceptional designs that 
                                        stand out and deliver professional results.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-button-profile"
                            role="tabpanel"
                            aria-labelledby="pills-button-profile-tab"
                            tabIndex={0}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://picsum.photos/120/80?random=3"
                                        className="radius-8"
                                        alt="Profile Content"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg mb-8">User Profile</h6>
                                    <p className="text-secondary-light mb-16">
                                        Manage your creative profile and showcase your work with Freepik's 
                                        professional portfolio tools. Connect with other designers and 
                                        build your creative network within our community.
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        Your profile is your creative identity - make it shine with 
                                        professional presentation and engaging content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-button-settings"
                            role="tabpanel"
                            aria-labelledby="pills-button-settings-tab"
                            tabIndex={0}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://picsum.photos/120/80?random=4"
                                        className="radius-8"
                                        alt="Settings Content"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg mb-8">Account Settings</h6>
                                    <p className="text-secondary-light mb-16">
                                        Customize your Freepik experience with personalized settings and 
                                        preferences. Control your downloads, manage subscriptions, and 
                                        configure notifications to match your workflow.
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        Fine-tune your account settings to optimize your creative 
                                        workflow and maximize productivity.
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

export default ButtonTabs