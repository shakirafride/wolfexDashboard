import React from 'react'

const ImagesWithContent = () => {
    return (
        <div className="col-xxl-6 col-md-6">
            <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Images With content</h6>
                </div>
                <div className="card-body p-24">
                    <div className="row gy-3">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                                    alt="Will Mart"
                                    className="w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0"
                                />
                                <div className="flex-grow-1 d-inline-flex flex-column">
                                    <h6 className="text-sm mb-0">Will Mart</h6>
                                    <span className="text-xs text-secondary-light">
                                        will.mart@freepik.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                                    alt="John Smith"
                                    className="w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0"
                                />
                                <div className="flex-grow-1 d-inline-flex flex-column">
                                    <h6 className="text-sm mb-0">John Smith</h6>
                                    <span className="text-xs text-secondary-light">
                                        john.smith@freepik.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=32&h=32&fit=crop&crop=face"
                                    alt="Michael Johnson"
                                    className="w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0"
                                />
                                <div className="flex-grow-1 d-inline-flex flex-column">
                                    <h6 className="text-sm mb-0">Michael Johnson</h6>
                                    <span className="text-xs text-secondary-light">
                                        michael.j@freepik.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=32&h=32&fit=crop&crop=face"
                                    alt="David Wilson"
                                    className="w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0"
                                />
                                <div className="flex-grow-1 d-inline-flex flex-column">
                                    <h6 className="text-sm mb-0">David Wilson</h6>
                                    <span className="text-xs text-secondary-light">
                                        david.wilson@freepik.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesWithContent