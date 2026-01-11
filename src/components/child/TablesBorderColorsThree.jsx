import React from 'react'

const TablesBorderColorsThree = () => {
    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">E-commerce Order Management</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table bordered-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col" className="text-center">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg"
                                                alt="Customer"
                                                className="flex-shrink-0 me-12 radius-8 w-40-px h-40-px"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                Emma Thompson
                                            </span>
                                        </div>
                                    </td>
                                    <td>#ORD2024001</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/modern-smartphone-screen-composition_23-2147839071.jpg"
                                                alt="iPhone"
                                                className="w-32-px h-32-px rounded me-8"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>iPhone 15 Pro Max</span>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>$1,199.00</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                                            Delivered
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                                                alt="Customer"
                                                className="flex-shrink-0 me-12 radius-8 w-40-px h-40-px"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                Michael Johnson
                                            </span>
                                        </div>
                                    </td>
                                    <td>#ORD2024002</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg"
                                                alt="Laptop"
                                                className="w-32-px h-32-px rounded me-8"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>MacBook Pro 16"</span>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>$2,499.00</td>
                                    <td className="text-center">
                                        <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">
                                            Processing
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg"
                                                alt="Customer"
                                                className="flex-shrink-0 me-12 radius-8 w-40-px h-40-px"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                Arjun Patel
                                            </span>
                                        </div>
                                    </td>
                                    <td>#ORD2024003</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/modern-watch-white-surface_144627-18602.jpg"
                                                alt="Smart Watch"
                                                className="w-32-px h-32-px rounded me-8"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Apple Watch Series 9</span>
                                        </div>
                                    </td>
                                    <td>2</td>
                                    <td>$798.00</td>
                                    <td className="text-center">
                                        <span className="bg-info-focus text-info-main px-24 py-4 rounded-pill fw-medium text-sm">
                                            Shipped
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
                                                alt="Customer"
                                                className="flex-shrink-0 me-12 radius-8 w-40-px h-40-px"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                Sarah Kim
                                            </span>
                                        </div>
                                    </td>
                                    <td>#ORD2024004</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg"
                                                alt="Sneakers"
                                                className="w-32-px h-32-px rounded me-8"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Nike Air Max 270</span>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>$150.00</td>
                                    <td className="text-center">
                                        <span className="bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm">
                                            Cancelled
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg"
                                                alt="Customer"
                                                className="flex-shrink-0 me-12 radius-8 w-40-px h-40-px"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                Carlos Martinez
                                            </span>
                                        </div>
                                    </td>
                                    <td>#ORD2024005</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/wireless-headphones-white-background_23-2150898404.jpg"
                                                alt="Headphones"
                                                className="w-32-px h-32-px rounded me-8"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Sony WH-1000XM5</span>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>$399.99</td>
                                    <td className="text-center">
                                        <span className="bg-primary-focus text-primary-main px-24 py-4 rounded-pill fw-medium text-sm">
                                            Confirmed
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

export default TablesBorderColorsThree