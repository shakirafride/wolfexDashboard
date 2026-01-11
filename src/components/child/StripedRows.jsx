import React from 'react'

const StripedRows = () => {
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Product Inventory</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table striped-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Discount</th>
                                    <th scope="col">Stock</th>
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
                                                src="https://img.freepik.com/free-photo/wireless-headphones-white-background_23-2150898404.jpg"
                                                alt="Wireless Headphones"
                                                className="flex-shrink-0 me-12 radius-8 me-12"
                                                style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Wireless Headphones</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Electronics
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$299.99</td>
                                    <td>10%</td>
                                    <td>150</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            In Stock
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg"
                                                alt="Office Supplies"
                                                className="flex-shrink-0 me-12 radius-8 me-12"
                                                style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Office Supplies Set</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Stationery
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$45.00</td>
                                    <td>N/A</td>
                                    <td>89</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Available
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/coffee-cup-with-coffee-beans-wooden-table_1150-8897.jpg"
                                                alt="Premium Coffee"
                                                className="flex-shrink-0 me-12 radius-8 me-12"
                                                style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Premium Coffee Beans</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Food & Beverage
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$24.99</td>
                                    <td>$5.00</td>
                                    <td>245</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Popular
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/plant-pot-white-background_1150-14720.jpg"
                                                alt="Indoor Plant"
                                                className="flex-shrink-0 me-12 radius-8 me-12"
                                                style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Indoor Plant Collection</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Home & Garden
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$35.00</td>
                                    <td>15%</td>
                                    <td>67</td>
                                    <td className="text-center">
                                        <span className="bg-warning-focus text-warning-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Low Stock
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
                                                alt="Educational Books"
                                                className="flex-shrink-0 me-12 radius-8 me-12"
                                                style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-normal">Educational Books</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Books & Media
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$18.50</td>
                                    <td>20%</td>
                                    <td>123</td>
                                    <td className="text-center">
                                        <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                            Bestseller
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

export default StripedRows