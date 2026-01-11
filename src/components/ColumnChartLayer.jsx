import React from 'react'
import useReactApexChart from '../hook/useReactApexChart.jsx'
import ReactApexChart from 'react-apexcharts'

const ColumnChartLayer = () => {
    let { columnChartSeriesOne, columnChartOptionsOne, columnChartSeriesTwo, columnChartOptionsTwo, columnChartSeriesThree, columnChartOptionsThree, columnChartSeriesFour, columnChartOptionsFour } = useReactApexChart()
    
    return (
        <>
            {/* Header Section */}
            <div className="card mb-24 p-0 radius-12 overflow-hidden">
                <div className="card-body p-40 bg-gradient-success text-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h4 className="text-white mb-8">Column Chart Dashboard</h4>
                            <p className="text-white mb-0 opacity-75">Comprehensive bar chart analysis and comparison tools</p>
                        </div>
                        <div className="text-end">
                            <div className="bg-white bg-opacity-20 rounded-circle p-16">
                                <i className="ri-bar-chart-2-line text-white text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="row gy-4">
                <div className="col-md-6">
                    <div className="card h-100 p-0 radius-12 overflow-hidden shadow-sm">
                        <div className="card-header border-bottom bg-primary-50 py-20 px-24">
                            <div className="d-flex align-items-center gap-12">
                                <div className="w-8-px h-8-px bg-primary-600 rounded-circle"></div>
                                <h6 className="text-lg fw-semibold mb-0 text-primary-600">Basic Column Chart</h6>
                            </div>
                        </div>
                        <div className="card-body p-24">
                            <ReactApexChart id="columnChart" options={columnChartOptionsOne} series={columnChartSeriesOne} type="bar" height={280} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 p-0 radius-12 overflow-hidden shadow-sm">
                        <div className="card-header border-bottom bg-success-50 py-20 px-24">
                            <div className="d-flex align-items-center gap-12">
                                <div className="w-8-px h-8-px bg-success-600 rounded-circle"></div>
                                <h6 className="text-lg fw-semibold mb-0 text-success-600">Advanced Column Chart</h6>
                            </div>
                        </div>
                        <div className="card-body p-24">
                            <ReactApexChart id="columnGroupBarChart" options={columnChartOptionsTwo} series={columnChartSeriesTwo} type="bar" height={280} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 p-0 radius-12 overflow-hidden shadow-sm">
                        <div className="card-header border-bottom bg-warning-50 py-20 px-24">
                            <div className="d-flex align-items-center gap-12">
                                <div className="w-8-px h-8-px bg-warning-600 rounded-circle"></div>
                                <h6 className="text-lg fw-semibold mb-0 text-warning-600">Grouped Column Analysis</h6>
                            </div>
                        </div>
                        <div className="card-body p-24">
                            <ReactApexChart id="groupColumnBarChart" options={columnChartOptionsThree} series={columnChartSeriesThree} type="bar" height={280} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 p-0 radius-12 overflow-hidden shadow-sm">
                        <div className="card-header border-bottom bg-info-50 py-20 px-24">
                            <div className="d-flex align-items-center gap-12">
                                <div className="w-8-px h-8-px bg-info-600 rounded-circle"></div>
                                <h6 className="text-lg fw-semibold mb-0 text-info-600">Simple Column Metrics</h6>
                            </div>
                        </div>
                        <div className="card-body p-24">
                            <ReactApexChart id="upDownBarchart" options={columnChartOptionsFour} series={columnChartSeriesFour} type="bar" height={280} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Performance Metrics */}
            <div className="row mt-24">
                <div className="col-12">
                    <div className="card p-0 radius-12 overflow-hidden">
                        <div className="card-body p-32 bg-gradient-light">
                            <div className="row">
                                <div className="col-md-2 text-center">
                                    <div className="p-16">
                                        <div className="w-48-px h-48-px bg-primary-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-12">
                                            <i className="ri-bar-chart-line text-white text-xl"></i>
                                        </div>
                                        <h6 className="text-primary-600 mb-4">4 Charts</h6>
                                        <span className="text-secondary-light text-sm">Available Types</span>
                                    </div>
                                </div>
                                <div className="col-md-2 text-center">
                                    <div className="p-16">
                                        <div className="w-48-px h-48-px bg-success-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-12">
                                            <i className="ri-speed-line text-white text-xl"></i>
                                        </div>
                                        <h6 className="text-success-600 mb-4">Fast</h6>
                                        <span className="text-secondary-light text-sm">Rendering</span>
                                    </div>
                                </div>
                                <div className="col-md-2 text-center">
                                    <div className="p-16">
                                        <div className="w-48-px h-48-px bg-warning-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-12">
                                            <i className="ri-palette-line text-white text-xl"></i>
                                        </div>
                                        <h6 className="text-warning-600 mb-4">Colorful</h6>
                                        <span className="text-secondary-light text-sm">Themes</span>
                                    </div>
                                </div>
                                <div className="col-md-2 text-center">
                                    <div className="p-16">
                                        <div className="w-48-px h-48-px bg-info-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-12">
                                            <i className="ri-smartphone-line text-white text-xl"></i>
                                        </div>
                                        <h6 className="text-info-600 mb-4">Mobile</h6>
                                        <span className="text-secondary-light text-sm">Friendly</span>
                                    </div>
                                </div>
                                <div className="col-md-2 text-center">
                                    <div className="p-16">
                                        <div className="w-48-px h-48-px bg-danger-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-12">
                                            <i className="ri-download-line text-white text-xl"></i>
                                        </div>
                                        <h6 className="text-danger-600 mb-4">Export</h6>
                                        <span className="text-secondary-light text-sm">Ready</span>
                                    </div>
                                </div>
                                <div className="col-md-2 text-center">
                                    <div className="p-16">
                                        <div className="w-48-px h-48-px bg-purple-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-12">
                                            <i className="ri-settings-3-line text-white text-xl"></i>
                                        </div>
                                        <h6 className="text-purple-600 mb-4">Custom</h6>
                                        <span className="text-secondary-light text-sm">Options</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColumnChartLayer