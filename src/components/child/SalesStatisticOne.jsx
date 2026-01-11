import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import useReactApexChart from '../../hook/useReactApexChart';

const SalesStatisticOne = () => {
    let { chartOptions, chartSeries } = useReactApexChart();
    
    // Enhanced chart options with new colors
    const enhancedChartOptions = {
        ...chartOptions,
        stroke: {
            ...chartOptions.stroke,
            colors: ["#FF6B6B"], // New vibrant red color
        },
        fill: {
            ...chartOptions.fill,
            gradient: {
                ...chartOptions.fill.gradient,
                gradientToColors: ["#FF6B6B40"], // Matching gradient
            },
        },
        markers: {
            ...chartOptions.markers,
            colors: ["#FF6B6B"],
        },
    };

    return (
        <div className="col-xxl-6 col-xl-12">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <Icon icon="material-symbols:trending-up" className="text-2xl text-primary-600" />
                            <h6 className="text-lg mb-0">Sales Analytics</h6>
                        </div>
                        <select className="form-select bg-base form-select-sm w-auto" defaultValue="Yearly">
                            <option value="Yearly">Yearly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Today">Today</option>
                        </select>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2 mt-8">
                        <h6 className="mb-0">$27,200</h6>
                        <span className="text-sm fw-semibold rounded-pill bg-success-focus text-success-main border br-success px-8 py-4 line-height-1 d-flex align-items-center gap-1">
                            15% <Icon icon="material-symbols:arrow-upward" className="text-xs" />
                        </span>
                        <span className="text-xs fw-medium">+ $1800 Per Day</span>
                    </div>
                    <ReactApexChart options={enhancedChartOptions} series={chartSeries} type="area" height={264} />
                </div>
            </div>
        </div>
    );
};

export default SalesStatisticOne;