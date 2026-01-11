import React from 'react'

const TablesBorderColors = () => {
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Financial Transactions</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table border-primary-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">S.L</label>
                                        </div>
                                    </th>
                                    <th scope="col">Client</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">01</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg"
                                                alt="Client"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Global Tech Solutions</span>
                                        </div>
                                    </td>
                                    <td>15 Apr 2024</td>
                                    <td>
                                        <span className="bg-warning-focus text-warning-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Pending
                                        </span>
                                    </td>
                                    <td>$45,250.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">02</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                                                alt="Client"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Creative Design Studio</span>
                                        </div>
                                    </td>
                                    <td>18 Apr 2024</td>
                                    <td>
                                        <span className="bg-danger-focus text-danger-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Rejected
                                        </span>
                                    </td>
                                    <td>$12,800.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">03</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg"
                                                alt="Client"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Innovation Labs Inc.</span>
                                        </div>
                                    </td>
                                    <td>22 Apr 2024</td>
                                    <td>
                                        <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Completed
                                        </span>
                                    </td>
                                    <td>$78,500.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">04</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                                                alt="Client"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Digital Marketing Pro</span>
                                        </div>
                                    </td>
                                    <td>25 Apr 2024</td>
                                    <td>
                                        <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Completed
                                        </span>
                                    </td>
                                    <td>$32,750.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">05</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                                                alt="Client"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>E-commerce Solutions</span>
                                        </div>
                                    </td>
                                    <td>28 Apr 2024</td>
                                    <td>
                                        <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Completed
                                        </span>
                                    </td>
                                    <td>$56,900.00</td>
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

export default TablesBorderColors