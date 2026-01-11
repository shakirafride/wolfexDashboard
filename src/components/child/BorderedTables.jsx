import React from 'react'
import { Link } from 'react-router-dom'

const BorderedTables = () => {
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Project Management</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table basic-border-table mb-0">
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Client</th>
                                    <th>Deadline</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg"
                                                alt="Web Development"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-primary-600">E-commerce Website</span>
                                        </div>
                                    </td>
                                    <td>TechCorp Inc.</td>
                                    <td>15 Apr 2024</td>
                                    <td>$25,000</td>
                                    <td>
                                        <span className="bg-success-focus text-success-main px-16 py-4 rounded-pill fw-medium text-sm">
                                            Active
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
                                                alt="Mobile App"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-primary-600">Mobile App Design</span>
                                        </div>
                                    </td>
                                    <td>StartupXYZ</td>
                                    <td>28 Apr 2024</td>
                                    <td>$18,500</td>
                                    <td>
                                        <span className="bg-warning-focus text-warning-main px-16 py-4 rounded-pill fw-medium text-sm">
                                            In Progress
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/marketing-ideas-share-research-planning-concept_53876-127431.jpg"
                                                alt="Marketing Campaign"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-primary-600">Marketing Campaign</span>
                                        </div>
                                    </td>
                                    <td>BrandCo Ltd.</td>
                                    <td>05 May 2024</td>
                                    <td>$12,000</td>
                                    <td>
                                        <span className="bg-info-focus text-info-main px-16 py-4 rounded-pill fw-medium text-sm">
                                            Planning
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/cloud-network-data-storage-digital-concept_53876-124501.jpg"
                                                alt="Cloud Migration"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-primary-600">Cloud Migration</span>
                                        </div>
                                    </td>
                                    <td>Enterprise Solutions</td>
                                    <td>20 May 2024</td>
                                    <td>$45,000</td>
                                    <td>
                                        <span className="bg-primary-focus text-primary-main px-16 py-4 rounded-pill fw-medium text-sm">
                                            Approved
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg"
                                                alt="AI Integration"
                                                className="w-32-px h-32-px rounded flex-shrink-0 me-12 overflow-hidden"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span className="text-primary-600">AI Integration</span>
                                        </div>
                                    </td>
                                    <td>FutureTech</td>
                                    <td>10 Jun 2024</td>
                                    <td>$35,000</td>
                                    <td>
                                        <span className="bg-danger-focus text-danger-main px-16 py-4 rounded-pill fw-medium text-sm">
                                            Pending
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

export default BorderedTables