import React from 'react'
import { Link } from 'react-router-dom'

const DefaultTable = () => {
    return (
        <div className="col-lg-6">
            <div className="card h-100">
                <div className="card-header">
                    <h5 className="card-title mb-0">Employee Directory</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table basic-table mb-0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Employee</th>
                                    <th>Department</th>
                                    <th>Join Date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                                                alt="Employee"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                            />
                                            <span className="text-primary-600">Alex Johnson</span>
                                        </div>
                                    </td>
                                    <td>Engineering</td>
                                    <td>15 Jan 2024</td>
                                    <td>$85,000</td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                                                alt="Employee"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                            />
                                            <span className="text-primary-600">Sarah Williams</span>
                                        </div>
                                    </td>
                                    <td>Marketing</td>
                                    <td>22 Jan 2024</td>
                                    <td>$72,000</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                                                alt="Employee"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                            />
                                            <span className="text-primary-600">Michael Chen</span>
                                        </div>
                                    </td>
                                    <td>Design</td>
                                    <td>05 Feb 2024</td>
                                    <td>$78,000</td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg"
                                                alt="Employee"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                            />
                                            <span className="text-primary-600">David Rodriguez</span>
                                        </div>
                                    </td>
                                    <td>Sales</td>
                                    <td>18 Feb 2024</td>
                                    <td>$68,000</td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg"
                                                alt="Employee"
                                                className="w-32-px h-32-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                            />
                                            <span className="text-primary-600">Emma Thompson</span>
                                        </div>
                                    </td>
                                    <td>HR</td>
                                    <td>10 Mar 2024</td>
                                    <td>$75,000</td>
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

export default DefaultTable