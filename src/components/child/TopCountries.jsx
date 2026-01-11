import React, { useEffect } from 'react';
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import { Icon } from '@iconify/react/dist/iconify.js';

const TopCountries = () => {

    useEffect(() => {
        const map = new jsVectorMap({
            selector: "#map",
            map: 'world',
            backgroundColor: '#1e293b',
            borderColor: '#334155',
            borderOpacity: 0.8,
            borderWidth: 1,
            color: '#475569',
            regionStyle: {
                initial: {
                    fill: '#475569',
                    stroke: '#334155',
                    'stroke-width': 1,
                },
                hover: {
                    fill: '#3B82F6',
                    cursor: 'pointer'
                }
            },
            markerStyle: {
                initial: {
                    r: 8,
                    'fill': '#3B82F6',
                    'fill-opacity': 0.9,
                    'stroke': '#ffffff',
                    'stroke-width': 2,
                    'stroke-opacity': 1
                },
                hover: {
                    r: 10,
                    'fill': '#1D4ED8',
                }
            },
            markers: [
                { coords: [39.8283, -98.5795], name: 'USA: 1,240 Users' },
                { coords: [36.2048, 138.2529], name: 'Japan: 1,240 Users' },
                { coords: [46.6034, 1.8883], name: 'France: 1,240 Users' },
                { coords: [51.1657, 10.4515], name: 'Germany: 1,240 Users' },
                { coords: [35.9078, 127.7669], name: 'South Korea: 1,240 Users' },
            ],
            series: {
                regions: [{
                    attribute: "fill",
                    scale: {
                        "US": '#3B82F6',
                        "JP": '#F97316',
                        "FR": '#EAB308',
                        "DE": '#22C55E',
                        "KR": '#06B6D4',
                    },
                    values: {
                        US: "US",
                        JP: "JP",
                        FR: "FR",
                        DE: "DE",
                        KR: "KR",
                    }
                }]
            },
            hoverOpacity: 0.7,
            normalizeFunction: 'linear',
            zoomOnScroll: false,
            scaleColors: ['#64748b', '#1e40af'],
            selectedColor: '#1D4ED8',
            selectedRegions: [],
            enableZoom: true,
            zoomButtons: true,
            hoverColor: '#3B82F6',
        });

        return () => {
            map && map.destroy();
        };
    }, []);

    return (
        <div className="col-xxl-6 col-xl-12">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <div className="d-flex align-items-center gap-2">
                            <Icon icon="material-symbols:public" className="text-2xl text-primary-600" />
                            <h6 className="mb-0 fw-bold text-lg">Top Countries</h6>
                        </div>
                        <select className="form-select form-select-sm w-auto bg-base border text-secondary-light" defaultValue="Today">
                            <option value="Today">Today</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div id="map" className="h-100 border radius-8" style={{minHeight: '300px', backgroundColor: '#1e293b'}}></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="h-100 border p-16 pe-0 radius-8">
                                <div className="max-h-266-px overflow-y-auto scroll-sm pe-16">
                                    <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <img
                                                src="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="USA"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 object-fit-cover"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-sm mb-0">USA</h6>
                                                <span className="text-xs text-secondary-light fw-medium">
                                                    1,240 Users
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 w-100">
                                            <div className="w-100 max-w-66 ms-auto">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="USA Progress"
                                                    aria-valuenow={80}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-primary-600 rounded-pill"
                                                        style={{ width: "80%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-secondary-light font-xs fw-semibold">
                                                80%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <img
                                                src="https://images.pexels.com/photos/161963/cherry-blossom-tree-flowers-spring-161963.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="Japan"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 object-fit-cover"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-sm mb-0">Japan</h6>
                                                <span className="text-xs text-secondary-light fw-medium">
                                                    1,240 Users
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 w-100">
                                            <div className="w-100 max-w-66 ms-auto">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="Japan Progress"
                                                    aria-valuenow={60}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-orange rounded-pill"
                                                        style={{ width: "60%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-secondary-light font-xs fw-semibold">
                                                60%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <img
                                                src="https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="France"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 object-fit-cover"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-sm mb-0">France</h6>
                                                <span className="text-xs text-secondary-light fw-medium">
                                                    1,240 Users
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 w-100">
                                            <div className="w-100 max-w-66 ms-auto">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="France Progress"
                                                    aria-valuenow={49}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-yellow rounded-pill"
                                                        style={{ width: "49%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-secondary-light font-xs fw-semibold">
                                                49%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <img
                                                src="https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="Germany"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 object-fit-cover"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-sm mb-0">Germany</h6>
                                                <span className="text-xs text-secondary-light fw-medium">
                                                    1,240 Users
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 w-100">
                                            <div className="w-100 max-w-66 ms-auto">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="Germany Progress"
                                                    aria-valuenow={100}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-success-main rounded-pill"
                                                        style={{ width: "100%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-secondary-light font-xs fw-semibold">
                                                100%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <img
                                                src="https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="South Korea"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 object-fit-cover"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-sm mb-0">South Korea</h6>
                                                <span className="text-xs text-secondary-light fw-medium">
                                                    1,240 Users
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 w-100">
                                            <div className="w-100 max-w-66 ms-auto">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="South Korea Progress"
                                                    aria-valuenow={30}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-info-main rounded-pill"
                                                        style={{ width: "30%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-secondary-light font-xs fw-semibold">
                                                30%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-3">
                                        <div className="d-flex align-items-center w-100">
                                            <img
                                                src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                                alt="Canada"
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 object-fit-cover"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-sm mb-0">Canada</h6>
                                                <span className="text-xs text-secondary-light fw-medium">
                                                    980 Users
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 w-100">
                                            <div className="w-100 max-w-66 ms-auto">
                                                <div
                                                    className="progress progress-sm rounded-pill"
                                                    role="progressbar"
                                                    aria-label="Canada Progress"
                                                    aria-valuenow={65}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div
                                                        className="progress-bar bg-purple rounded-pill"
                                                        style={{ width: "65%" }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-secondary-light font-xs fw-semibold">
                                                65%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCountries;