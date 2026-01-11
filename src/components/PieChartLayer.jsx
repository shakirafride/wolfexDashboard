import React from 'react'
import BasicPieChart from './child/BasicPieChart'
import DonutChart from './child/DonutChart'
import RadarChart from './child/RadarChart'
import MultipleSeries from './child/MultipleSeries'

const PieChartLayer = () => {
    return (
        <>
            {/* Header Section */}
            <div className="card mb-24 p-0 radius-12 overflow-hidden">
                <div className="card-body p-40 bg-gradient-warning text-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h4 className="text-white mb-8">Pie Chart Analytics Hub</h4>
                            <p className="text-white mb-0 opacity-75">Circular data visualization with advanced chart components</p>
                        </div>
                        <div className="text-end">
                            <div className="bg-white bg-opacity-20 rounded-circle p-16">
                                <i className="ri-pie-chart-2-line text-white text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="row gy-4">
                {/* BasicPieChart */}
                <BasicPieChart />

                {/* DonutChart */}
                <DonutChart />

                {/* RadarChart */}
                <RadarChart />

                {/* MultipleSeries */}
                <MultipleSeries />
            </div>

            {/* Feature Highlights */}
            <div className="row mt-24">
                <div className="col-12">
                    <div className="card p-0 radius-12 overflow-hidden">
                        <div className="card-body p-32">
                            <div className="text-center mb-24">
                                <h5 className="text-neutral-900 mb-8">Chart Features & Capabilities</h5>
                                <p className="text-secondary-light mb-0">Explore the powerful features of our pie chart components</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="text-center p-20 bg-primary-50 rounded-12 mb-16">
                                        <div className="w-56-px h-56-px bg-primary-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-16">
                                            <i className="ri-pie-chart-line text-white text-2xl"></i>
                                        </div>
                                        <h6 className="text-primary-600 mb-8">Basic Pie</h6>
                                        <p className="text-secondary-light text-sm mb-0">Simple and clean pie chart visualization</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="text-center p-20 bg-success-50 rounded-12 mb-16">
                                        <div className="w-56-px h-56-px bg-success-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-16">
                                            <i className="ri-donut-chart-line text-white text-2xl"></i>
                                        </div>
                                        <h6 className="text-success-600 mb-8">Donut Chart</h6>
                                        <p className="text-secondary-light text-sm mb-0">Modern donut style with center content</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="text-center p-20 bg-warning-50 rounded-12 mb-16">
                                        <div className="w-56-px h-56-px bg-warning-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-16">
                                            <i className="ri-radar-line text-white text-2xl"></i>
                                        </div>
                                        <h6 className="text-warning-600 mb-8">Radar Chart</h6>
                                        <p className="text-secondary-light text-sm mb-0">Multi-dimensional data comparison</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="text-center p-20 bg-info-50 rounded-12 mb-16">
                                        <div className="w-56-px h-56-px bg-info-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-16">
                                            <i className="ri-stack-line text-white text-2xl"></i>
                                        </div>
                                        <h6 className="text-info-600 mb-8">Multi-Series</h6>
                                        <p className="text-secondary-light text-sm mb-0">Complex data with multiple series</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="row mt-16">
                <div className="col-md-3">
                    <div className="card p-0 radius-12 overflow-hidden">
                        <div className="card-body p-20 text-center bg-gradient-primary text-white">
                            <h4 className="text-white mb-4">4</h4>
                            <span className="text-white opacity-75">Chart Types</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-0 radius-12 overflow-hidden">
                        <div className="card-body p-20 text-center bg-gradient-success text-white">
                            <h4 className="text-white mb-4">360°</h4>
                            <span className="text-white opacity-75">Data View</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-0 radius-12 overflow-hidden">
                        <div className="card-body p-20 text-center bg-gradient-warning text-white">
                            <h4 className="text-white mb-4">∞</h4>
                            <span className="text-white opacity-75">Customizable</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-0 radius-12 overflow-hidden">
                        <div className="card-body p-20 text-center bg-gradient-info text-white">
                            <h4 className="text-white mb-4">100%</h4>
                            <span className="text-white opacity-75">Responsive</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PieChartLayer