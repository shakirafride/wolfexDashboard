import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Icon } from '@iconify/react/dist/iconify.js';

const AIPerformanceMetrics = () => {
    // AI Performance Line Chart Data
    const aiPerformanceSeries = [
        {
            name: "AI Accuracy",
            data: [85, 87, 89, 91, 88, 92, 94, 90, 93, 95, 92, 96],
        },
        {
            name: "Response Time",
            data: [120, 115, 110, 105, 108, 102, 98, 103, 95, 90, 93, 88],
        }
    ];

    const aiPerformanceOptions = {
        chart: {
            height: 264,
            type: "line",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        colors: ["#10B981", "#F59E0B"],
        stroke: {
            curve: "smooth",
            width: 3,
        },
        markers: {
            size: 0,
            strokeWidth: 3,
            hover: {
                size: 8,
            },
        },
        grid: {
            borderColor: "#334155",
            strokeDashArray: 3,
        },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            labels: {
                style: {
                    fontSize: "14px",
                    colors: "#64748b"
                },
            },
        },
        yaxis: [
            {
                title: {
                    text: "Accuracy (%)",
                    style: {
                        color: "#10B981",
                    },
                },
                labels: {
                    style: {
                        colors: "#64748b",
                    },
                    formatter: function (value) {
                        return value + "%";
                    },
                },
            },
            {
                opposite: true,
                title: {
                    text: "Response Time (ms)",
                    style: {
                        color: "#F59E0B",
                    },
                },
                labels: {
                    style: {
                        colors: "#64748b",
                    },
                    formatter: function (value) {
                        return value + "ms";
                    },
                },
            }
        ],
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            labels: {
                colors: '#64748b'
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: [
                {
                    formatter: function (y) {
                        return y + "%";
                    }
                },
                {
                    formatter: function (y) {
                        return y + "ms";
                    }
                }
            ]
        }
    };

    return (
        <div className="col-xxl-6 col-xl-12">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <Icon icon="material-symbols:speed" className="text-2xl text-primary-600" />
                            <h6 className="text-lg mb-0">AI Performance Metrics</h6>
                        </div>
                        <select className="form-select bg-base form-select-sm w-auto" defaultValue="Yearly">
                            <option value="Yearly">Yearly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Today">Today</option>
                        </select>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-4 mt-8">
                        <div className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px bg-success-main rounded-circle"></span>
                            <span className="text-sm fw-medium">Accuracy: 96%</span>
                            <span className="text-sm fw-semibold rounded-pill bg-success-focus text-success-main border br-success px-8 py-4 line-height-1 d-flex align-items-center gap-1">
                                +12% <Icon icon="material-symbols:arrow-upward" className="text-xs" />
                            </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px bg-warning-main rounded-circle"></span>
                            <span className="text-sm fw-medium">Avg Response: 88ms</span>
                            <span className="text-sm fw-semibold rounded-pill bg-success-focus text-success-main border br-success px-8 py-4 line-height-1 d-flex align-items-center gap-1">
                                -26% <Icon icon="material-symbols:arrow-downward" className="text-xs" />
                            </span>
                        </div>
                    </div>
                    <ReactApexChart options={aiPerformanceOptions} series={aiPerformanceSeries} type="line" height={264} />
                </div>
            </div>
        </div>
    );
};

export default AIPerformanceMetrics;