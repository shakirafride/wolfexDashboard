import React from 'react'

const TablesBorderColorsTwo = () => {
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Subscription Management</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table colored-row-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" className="bg-base">
                                        Registered On
                                    </th>
                                    <th scope="col" className="bg-base">
                                        Subscribers
                                    </th>
                                    <th scope="col" className="bg-base">
                                        Email
                                    </th>
                                    <th scope="col" className="bg-base">
                                        Plan
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-primary-light">12 May 2024</td>
                                    <td className="bg-primary-light">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg"
                                                alt="Subscriber"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                Rajesh Kumar
                                            </h6>
                                        </div>
                                    </td>
                                    <td className="bg-primary-light">rajesh.kumar@email.com</td>
                                    <td className="bg-primary-light">Free</td>
                                </tr>
                                <tr>
                                    <td className="bg-success-focus">14 May 2024</td>
                                    <td className="bg-success-focus">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg"
                                                alt="Subscriber"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                Maria Garcia
                                            </h6>
                                        </div>
                                    </td>
                                    <td className="bg-success-focus">maria.garcia@email.com</td>
                                    <td className="bg-success-focus">Basic</td>
                                </tr>
                                <tr>
                                    <td className="bg-info-focus">16 May 2024</td>
                                    <td className="bg-info-focus">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                                                alt="Subscriber"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                James Wilson
                                            </h6>
                                        </div>
                                    </td>
                                    <td className="bg-info-focus">james.wilson@email.com</td>
                                    <td className="bg-info-focus">Standard</td>
                                </tr>
                                <tr>
                                    <td className="bg-warning-focus">18 May 2024</td>
                                    <td className="bg-warning-focus">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
                                                alt="Subscriber"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                Lisa Chen
                                            </h6>
                                        </div>
                                    </td>
                                    <td className="bg-warning-focus">lisa.chen@email.com</td>
                                    <td className="bg-warning-focus">Business</td>
                                </tr>
                                <tr>
                                    <td className="bg-danger-focus">20 May 2024</td>
                                    <td className="bg-danger-focus">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg"
                                                alt="Subscriber"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                Carlos Rodriguez
                                            </h6>
                                        </div>
                                    </td>
                                    <td className="bg-danger-focus">carlos.rodriguez@email.com</td>
                                    <td className="bg-danger-focus">Enterprise</td>
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

export default TablesBorderColorsTwo