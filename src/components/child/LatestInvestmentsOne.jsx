import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const LatestInvestmentsOne = () => {
    return (
        <div className="col-xxl-6">
            <div className="card h-100">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <h6 className="mb-2 fw-bold text-lg mb-0">Latest Investments</h6>
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
                        <table className="table bordered-table sm-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Asset</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price </th>
                                    <th scope="col">Date</th>
                                    <th scope="col" className="text-center">
                                        Total Orders
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="Gold"
                                                className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Gold</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Main Asset
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-md mb-0 fw-normal">7500</h6>
                                        <span className="text-sm text-secondary-light fw-normal">
                                            Ounces
                                        </span>
                                    </td>
                                    <td>$7,500.00</td>
                                    <td>25 May 2024</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-16 py-4 radius-8 fw-medium text-sm">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="Dollars"
                                                className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Dollars</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Currency
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-md mb-0 fw-normal">5,40,000</h6>
                                        <span className="text-sm text-secondary-light fw-normal">
                                            Dollars
                                        </span>
                                    </td>
                                    <td>$5,40,000.00</td>
                                    <td>25 May 2024</td>
                                    <td className="text-center">
                                        <span className="bg-warning-focus text-warning-main px-16 py-4 radius-8 fw-medium text-sm">
                                            In Progress
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="Stock Market"
                                                className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Stock Market</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Product
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-md mb-0 fw-normal">1500</h6>
                                        <span className="text-sm text-secondary-light fw-normal">
                                            Products
                                        </span>
                                    </td>
                                    <td>$50,000.00</td>
                                    <td>25 May 2024</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-16 py-4 radius-8 fw-medium text-sm">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="Diamond"
                                                className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Diamond</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Asset
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-md mb-0 fw-normal">350</h6>
                                        <span className="text-sm text-secondary-light fw-normal">
                                            Ounces
                                        </span>
                                    </td>
                                    <td>$30,000.00</td>
                                    <td>25 May 2024</td>
                                    <td className="text-center">
                                        <span className="bg-warning-focus text-warning-main px-16 py-4 radius-8 fw-medium text-sm">
                                            In Progress
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="S&P 500"
                                                className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">S&amp;P 500</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Index
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-md mb-0 fw-normal">24,000</h6>
                                        <span className="text-sm text-secondary-light fw-normal">
                                            Shares
                                        </span>
                                    </td>
                                    <td>$63,000.00</td>
                                    <td>25 May 2024</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-16 py-4 radius-8 fw-medium text-sm">
                                            Completed
                                        </span>
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

export default LatestInvestmentsOne