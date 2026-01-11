import React from 'react'
import DefaultLineChart from './child/DefaultLineChart'
import ZoomAbleLineChart from './child/ZoomAbleLineChart'
import LineDataLabel from './child/LineDataLabel'
import DoubleLineChart from './child/DoubleLineChart'
import StepLineChart from './child/StepLineChart'
import GradientLineChart from './child/GradientLineChart'

const LineChartLayer = () => {
    return (
        <>
            {/* Header Section */}
            <div className="card mb-24 p-0 radius-12 overflow-hidden">
                <div className="card-body p-40 bg-gradient-primary text-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h4 className="text-white mb-8">Line Chart Analytics</h4>
                            <p className="text-white mb-0 opacity-75">Interactive data visualization with multiple chart types</p>
                        </div>
                        <div className="text-end">
                            <div className="bg-white bg-opacity-20 rounded-circle p-16">
                                <i className="ri-line-chart-line text-white text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="row gy-4">
                {/* DefaultLineChart */}
                <DefaultLineChart />

                {/* ZoomAbleLineChart */}
                <ZoomAbleLineChart />

                {/* LineDataLabel */}
                <LineDataLabel />

                {/* DoubleLineChart */}
                <DoubleLineChart />

                {/* StepLineChart */}
                <StepLineChart />

                {/* GradientLineChart */}
                <GradientLineChart />
            </div>

            {/* Stats Footer */}
            <div className="row mt-24">
                <div className="col-12">
                    <div className="card p-0 radius-12 overflow-hidden">
                        <div className="card-body p-24 bg-light">
                            <div className="row text-center">
                                <div className="col-md-3">
                                    <div className="p-16">
                                        <h5 className="text-primary-600 mb-8">6</h5>
                                        <span className="text-secondary-light">Chart Types</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-16">
                                        <h5 className="text-success-600 mb-8">100%</h5>
                                        <span className="text-secondary-light">Interactive</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-16">
                                        <h5 className="text-warning-600 mb-8">Real-time</h5>
                                        <span className="text-secondary-light">Data Updates</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-16">
                                        <h5 className="text-info-600 mb-8">Responsive</h5>
                                        <span className="text-secondary-light">Design</span>
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

export default LineChartLayer