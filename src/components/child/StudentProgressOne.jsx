import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const StudentProgressOne = () => {
    return (
        <div className="col-xxl-4 col-md-6">
            <div className="card">
                <div className="card-header">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg mb-0">Student's Progress</h6>
                        <Link
                            to="#"
                            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                        >
                            View All
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                className="icon"
                            />
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-24">
                        <div className="d-flex align-items-center">
                            <img
                                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                alt="Theresa Webb"
                                className="w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden"
                                style={{objectFit: 'cover'}}
                            />
                            <div className="flex-grow-1">
                                <h6 className="text-md mb-0 fw-medium">Theresa Webb</h6>
                                <span className="text-sm text-secondary-light fw-medium">
                                    UI/UX Design Course
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <span className="text-primary-light text-sm d-block text-end">
                                <svg
                                    className="radial-progress"
                                    data-percentage={33}
                                    viewBox="0 0 80 80"
                                >
                                    <circle className="incomplete" cx={40} cy={40} r={35} />
                                    <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{ strokeDashoffset: "39.58406743523136" }}
                                    ></circle>
                                    <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                    >
                                        33
                                    </text>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-24">
                        <div className="d-flex align-items-center">
                            <img
                                src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                alt="Robert Fox"
                                className="w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden"
                                style={{objectFit: 'cover'}}
                            />
                            <div className="flex-grow-1">
                                <h6 className="text-md mb-0 fw-medium">Robert Fox</h6>
                                <span className="text-sm text-secondary-light fw-medium">
                                    Graphic Design Course
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <span className="text-primary-light text-sm d-block text-end">
                                <svg
                                    className="radial-progress"
                                    data-percentage={70}
                                    viewBox="0 0 80 80"
                                >
                                    <circle className="incomplete" cx={40} cy={40} r={35} />
                                    <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{ strokeDashoffset: "39.58406743523136" }}
                                    ></circle>
                                    <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                    >
                                        70
                                    </text>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-24">
                        <div className="d-flex align-items-center">
                            <img
                                src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                alt="Guy Hawkins"
                                className="w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden"
                                style={{objectFit: 'cover'}}
                            />
                            <div className="flex-grow-1">
                                <h6 className="text-md mb-0 fw-medium">Guy Hawkins</h6>
                                <span className="text-sm text-secondary-light fw-medium">
                                    Web developer Course
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <span className="text-primary-light text-sm d-block text-end">
                                <svg
                                    className="radial-progress"
                                    data-percentage={80}
                                    viewBox="0 0 80 80"
                                >
                                    <circle className="incomplete" cx={40} cy={40} r={35} />
                                    <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{ strokeDashoffset: "39.58406743523136" }}
                                    ></circle>
                                    <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                    >
                                        80
                                    </text>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-24">
                        <div className="d-flex align-items-center">
                            <img
                                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                alt="Cody Fisher"
                                className="w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden"
                                style={{objectFit: 'cover'}}
                            />
                            <div className="flex-grow-1">
                                <h6 className="text-md mb-0 fw-medium">Cody Fisher</h6>
                                <span className="text-sm text-secondary-light fw-medium">
                                    UI/UX Design Course
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <span className="text-primary-light text-sm d-block text-end">
                                <svg
                                    className="radial-progress"
                                    data-percentage={20}
                                    viewBox="0 0 80 80"
                                >
                                    <circle className="incomplete" cx={40} cy={40} r={35} />
                                    <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{ strokeDashoffset: "39.58406743523136" }}
                                    ></circle>
                                    <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                    >
                                        20
                                    </text>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-24">
                        <div className="d-flex align-items-center">
                            <img
                                src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                alt="Jacob Jones"
                                className="w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden"
                                style={{objectFit: 'cover'}}
                            />
                            <div className="flex-grow-1">
                                <h6 className="text-md mb-0 fw-medium">Jacob Jones</h6>
                                <span className="text-sm text-secondary-light fw-medium">
                                    UI/UX Design Course
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <span className="text-primary-light text-sm d-block text-end">
                                <svg
                                    className="radial-progress"
                                    data-percentage={40}
                                    viewBox="0 0 80 80"
                                >
                                    <circle className="incomplete" cx={40} cy={40} r={35} />
                                    <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{ strokeDashoffset: "39.58406743523136" }}
                                    ></circle>
                                    <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                    >
                                        40
                                    </text>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-0">
                        <div className="d-flex align-items-center">
                            <img
                                src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                alt="Darlene Robertson"
                                className="w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden"
                                style={{objectFit: 'cover'}}
                            />
                            <div className="flex-grow-1">
                                <h6 className="text-md mb-0 fw-medium">Darlene Robertson</h6>
                                <span className="text-sm text-secondary-light fw-medium">
                                    UI/UX Design Course
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <span className="text-primary-light text-sm d-block text-end">
                                <svg
                                    className="radial-progress"
                                    data-percentage={24}
                                    viewBox="0 0 80 80"
                                >
                                    <circle className="incomplete" cx={40} cy={40} r={35} />
                                    <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{ strokeDashoffset: "39.58406743523136" }}
                                    ></circle>
                                    <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                    >
                                        24
                                    </text>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProgressOne