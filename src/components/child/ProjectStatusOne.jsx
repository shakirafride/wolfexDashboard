import React from 'react';

const ProjectStatusOne = () => {
    return (
        <div className="col-xxl-4">
            <div className="card h-100">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <h6 className="mb-2 fw-bold text-lg">Project Status</h6>
                        <div className="">
                            <select className="form-select form-select-sm w-auto bg-base border text-secondary-light" defaultValue="Yearly">
                                <option value="Yearly">Yearly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Today">Today</option>
                            </select>
                        </div>
                    </div>
                    <div className="table-responsive scroll-sm">
                        <table className="table sm-table bordered-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Duration</th>
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
                                                src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                                                alt="Gold"
                                                className="w-24-px h-24-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Gold</span>
                                        </div>
                                    </td>
                                    <td>2 Months</td>
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
                                                        className="progress-bar bg-red rounded-pill"
                                                        style={{ width: "30%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                30%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                                                alt="Dollars"
                                                className="w-24-px h-24-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Dollars</span>
                                        </div>
                                    </td>
                                    <td>3 Months</td>
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
                                                        className="progress-bar bg-warning-main rounded-pill"
                                                        style={{ width: "50%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                50%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                                                alt="Stock Market"
                                                className="w-24-px h-24-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Stock Market</span>
                                        </div>
                                    </td>
                                    <td>1 Months</td>
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
                                                        className="progress-bar bg-info-main rounded-pill"
                                                        style={{ width: "60%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                60%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                                                alt="Diamond"
                                                className="w-24-px h-24-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>Diamond</span>
                                        </div>
                                    </td>
                                    <td>5 Months</td>
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
                                            <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                80%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                                                alt="S&P 500"
                                                className="w-24-px h-24-px rounded flex-shrink-0"
                                                style={{objectFit: 'cover'}}
                                            />
                                            <span>S&amp;P 500</span>
                                        </div>
                                    </td>
                                    <td>4 Months</td>
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
                                                        className="progress-bar bg-red rounded-pill"
                                                        style={{ width: "70%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                70%
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
    );
};

export default ProjectStatusOne;