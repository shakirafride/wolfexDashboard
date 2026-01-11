import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import useReactApexChart from '../../hook/useReactApexChart'

const TotalSubscriberOne = () => {
    let { barChartSeries, barChartOptions } = useReactApexChart()
    
    // Enhanced bar chart options with new colors
    const enhancedBarChartOptions = {
        ...barChartOptions,
        fill: {
            ...barChartOptions.fill,
            colors: ["#4ECDC4"], // New teal color
            gradient: {
                ...barChartOptions.fill.gradient,
                gradientToColors: ["#4ECDC4"],
            },
        },
    };

    return (
        <div className="col-xxl-3 col-xl-6">
            <div className="card h-100 radius-8 border">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center gap-2 mb-16">
                        <Icon icon="material-symbols:bar-chart" className="text-2xl text-primary-600" />
                        <h6 className="mb-0 fw-semibold text-lg">Total Subscriber</h6>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-20">
                        <h6 className="fw-semibold mb-0">5,000</h6>
                        <p className="text-sm mb-0">
                            <span className="bg-danger-focus border br-danger px-8 py-2 rounded-pill fw-semibold text-danger-main text-sm d-inline-flex align-items-center gap-1">
                                8%
                                <Icon
                                    icon="material-symbols:trending-down"
                                    className="icon"
                                />
                            </span>
                            - 15 Per Day
                        </p>
                    </div>
                    <ReactApexChart options={enhancedBarChartOptions} series={barChartSeries} type="bar" height={264} />
                </div>
            </div>
        </div>
    )
}

export default TotalSubscriberOne