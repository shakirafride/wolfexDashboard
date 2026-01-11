import React from 'react'

const StripedRowsTwo = () => {
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Course Enrollment</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table vertical-striped-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Course</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Students</th>
                                    <th scope="col" className="text-center">
                                        Rating
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
                                                alt="Web Development"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div>
                                                <h6 className="text-md mb-0 fw-normal">Web Development Bootcamp</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Programming
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$299.00</td>
                                    <td>12 weeks</td>
                                    <td>1,245</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            4.8★
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/ui-ux-representations-with-smartphone_23-2150201976.jpg"
                                                alt="UI/UX Design"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div>
                                                <h6 className="text-md mb-0 fw-normal">UI/UX Design Mastery</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Design
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$199.00</td>
                                    <td>8 weeks</td>
                                    <td>892</td>
                                    <td className="text-center">
                                        <span className="bg-warning-focus text-warning-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            4.6★
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/data-analysis-concept-with-person_23-2150040856.jpg"
                                                alt="Data Science"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div>
                                                <h6 className="text-md mb-0 fw-normal">Data Science Fundamentals</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Analytics
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$349.00</td>
                                    <td>16 weeks</td>
                                    <td>567</td>
                                    <td className="text-center">
                                        <span className="bg-info-focus text-info-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            4.7★
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg"
                                                alt="Digital Marketing"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div>
                                                <h6 className="text-md mb-0 fw-normal">Digital Marketing Pro</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Marketing
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$149.00</td>
                                    <td>6 weeks</td>
                                    <td>1,123</td>
                                    <td className="text-center">
                                        <span className="bg-primary-focus text-primary-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            4.5★
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/cybersecurity-concept-with-person-laptop_23-2150041090.jpg"
                                                alt="Cybersecurity"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div>
                                                <h6 className="text-md mb-0 fw-normal">Cybersecurity Essentials</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Security
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$399.00</td>
                                    <td>14 weeks</td>
                                    <td>445</td>
                                    <td className="text-center">
                                        <span className="bg-danger-focus text-danger-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            4.9★
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* card end */}
        </div>
    )
}

export default StripedRowsTwo