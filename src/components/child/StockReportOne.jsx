import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const StockReportOne = () => {
    return (
        <div className="col-xxl-6">
            <div className="card h-100">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <h6 className="mb-2 fw-bold text-lg mb-0">Stock Report</h6>
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
                    <div className="table-responsive scroll-sm">
                        <table className="table bordered-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Items</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">
                                        <div className="max-w-112 mx-auto">
                                            <span>Stock</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                                                alt="Nike Air Shoes"
                                                className="w-32-px h-32-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Nike Air Shoes</span>
                                        </div>
                                    </td>
                                    <td>$500.00</td>
                                    <td>
                                        <div className="max-w-112 mx-auto">
                                            <div className="w-100">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-primary-600 rounded-pill"
                                                        style={{ width: "0%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-12 text-secondary-light text-sm fw-medium">
                                                Out of Stock
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                                                alt="Blue T-Shirt"
                                                className="w-32-px h-32-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Blue T-Shirt</span>
                                        </div>
                                    </td>
                                    <td>$300.00</td>
                                    <td>
                                        <div className="max-w-112 mx-auto">
                                            <div className="w-100">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-danger-main rounded-pill"
                                                        style={{ width: "40%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-12 text-secondary-light text-sm fw-medium">
                                                18 Low Stock
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                                                alt="Smart Watch"
                                                className="w-32-px h-32-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Smart Watch</span>
                                        </div>
                                    </td>
                                    <td>$500.00</td>
                                    <td>
                                        <div className="max-w-112 mx-auto">
                                            <div className="w-100">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-success-main rounded-pill"
                                                        style={{ width: "80%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-12 text-secondary-light text-sm fw-medium">
                                                80 High Stock
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                                                alt="Woman Dress"
                                                className="w-32-px h-32-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Woman Dress</span>
                                        </div>
                                    </td>
                                    <td>$300.00</td>
                                    <td>
                                        <div className="max-w-112 mx-auto">
                                            <div className="w-100">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-success-main rounded-pill"
                                                        style={{ width: "50%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-12 text-secondary-light text-sm fw-medium">
                                                50 High Stock
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                                                alt="Hoodie Rose"
                                                className="w-32-px h-32-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Hoodie Rose</span>
                                        </div>
                                    </td>
                                    <td>$150.00</td>
                                    <td>
                                        <div className="max-w-112 mx-auto">
                                            <div className="w-100">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-success-main rounded-pill"
                                                        style={{ width: "70%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-12 text-secondary-light text-sm fw-medium">
                                                70 High Stock
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockReportOne