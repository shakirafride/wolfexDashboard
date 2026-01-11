import React from 'react';
import ReactApexChart from 'react-apexcharts';
import useReactApexChart from '../../hook/useReactApexChart.jsx';
import { Icon } from '@iconify/react/dist/iconify.js';

const GeneratedContent = () => {
    let { paymentStatusChartSeries, paymentStatusChartOptions } = useReactApexChart();
    
    // Enhanced chart options with new colors
    const enhancedPaymentStatusChartOptions = {
        ...paymentStatusChartOptions,
        colors: ["#2ECC71", "#E67E22"], // New green and orange colors
    };

    return (
        <div className="col-xxl-6">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <Icon icon="material-symbols:auto-graph" className="text-2xl text-primary-600" />
                            <h6 className="mb-0 fw-bold text-lg">Generated Content</h6>
                        </div>
                        <select className="form-select form-select-sm w-auto bg-base border text-secondary-light" defaultValue="">
                            <option value="" disabled>
                                Select Timeframe
                            </option>
                            <option value="Today">Today</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <ul className="d-flex flex-wrap align-items-center mt-3 gap-3">
                        <li className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px rounded-circle bg-success-main" />
                            <span className="text-secondary-light text-sm fw-semibold">
                                <Icon icon="material-symbols:article" className="me-1" />
                                Word:
                                <span className="text-primary-light fw-bold">500</span>
                            </span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px rounded-circle bg-orange" />
                            <span className="text-secondary-light text-sm fw-semibold">
                                <Icon icon="material-symbols:image" className="me-1" />
                                Image:
                                <span className="text-primary-light fw-bold">300</span>
                            </span>
                        </li>
                    </ul>
                    <div className="mt-40">
                        <div className="margin-16-minus">
                            <ReactApexChart options={enhancedPaymentStatusChartOptions} series={paymentStatusChartSeries} type="bar" height={250} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneratedContent;