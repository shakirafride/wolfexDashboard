import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const NoticeBoardOne = () => {
    return (
        <div className="col-xxl-4">
            <div className="card h-100">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <h6 className="mb-2 fw-bold text-lg mb-0">Notice board</h6>
                        <Link
                            to="#"
                            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                        >
                            View All
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                className="icon"
                            />
                        </Link>
                    </div>
                    <div className="d-flex align-items-start gap-2 mb-20">
                        <img
                            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                            alt="Admin"
                            className="flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12"
                            style={{objectFit: 'cover'}}
                        />
                        <div className="flex-grow-1">
                            <h6 className="text-md mb-1 fw-semibold">Admin</h6>
                            <p className="text-sm text-secondary-light fw-medium mb-1">
                                New investment opportunities available in renewable energy sector. 
                                Portfolio diversification recommended for Q2 2024.
                            </p>
                            <span className="text-sm text-secondary-light fw-normal">
                                25 Jan 2024
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start gap-2 mb-20">
                        <img
                            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                            alt="Kathryn Murphy"
                            className="flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12"
                            style={{objectFit: 'cover'}}
                        />
                        <div className="flex-grow-1">
                            <h6 className="text-md mb-1 fw-semibold">Kathryn Murphy</h6>
                            <p className="text-sm text-secondary-light fw-medium mb-1">
                                Market analysis shows strong performance in tech stocks. 
                                Consider rebalancing portfolio to include emerging markets for better returns.
                            </p>
                            <span className="text-sm text-secondary-light fw-normal">
                                25 Jan 2024
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                        <img
                            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                            alt="Cameron Williamson"
                            className="flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12"
                            style={{objectFit: 'cover'}}
                        />
                        <div className="flex-grow-1">
                            <h6 className="text-md mb-1 fw-semibold">Cameron Williamson</h6>
                            <p className="text-sm text-secondary-light fw-medium mb-1">
                                Quarterly earnings report shows 15% growth. Investment strategy 
                                meeting scheduled for next week to discuss expansion opportunities.
                            </p>
                            <span className="text-sm text-secondary-light fw-normal">
                                25 Jan 2024
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeBoardOne