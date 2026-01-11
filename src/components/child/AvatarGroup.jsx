import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const AvatarGroup = () => {
    return (
        <div className="col-xxl-6 col-md-6">
            <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Avatar Group</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap">
                        <img
                            src="https://i.pravatar.cc/24?img=1"
                            alt="Avatar 1"
                            className="w-24-px h-24-px rounded-circle object-fit-cover position-relative"
                        />
                        <img
                            src="https://i.pravatar.cc/24?img=2"
                            alt="Avatar 2"
                            className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/24?img=3"
                            alt="Avatar 3"
                            className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/24?img=4"
                            alt="Avatar 4"
                            className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/24?img=5"
                            alt="Avatar 5"
                            className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/24?img=5"
                            alt="Avatar 6"
                            className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/24?img=8"
                            alt="Avatar 7"
                            className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <span className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px border bg-neutral-100 text-secondary-light text-xs d-inline-flex align-items-center justify-content-center">
                            +5
                        </span>
                        <button
                            type="button"
                            className="w-24-px h-24-px rounded-circle border border-primary-600 text-primary-600 ms-8 border-dashed text-secondary-light text-xs d-inline-flex align-items-center justify-content-center"
                        >
                            <Icon icon="ic:baseline-plus" className="" />
                        </button>
                    </div>
                    <div className="d-flex align-items-center flex-wrap mt-24">
                        <img
                            src="https://i.pravatar.cc/32?img=1"
                            alt="Avatar 1"
                            className="w-32-px h-32-px rounded-circle object-fit-cover position-relative"
                        />
                        <img
                            src="https://i.pravatar.cc/32?img=2"
                            alt="Avatar 2"
                            className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/32?img=3"
                            alt="Avatar 3"
                            className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/32?img=4"
                            alt="Avatar 4"
                            className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/32?img=5"
                            alt="Avatar 5"
                            className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/32?img=5"
                            alt="Avatar 6"
                            className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <img
                            src="https://i.pravatar.cc/32?img=8"
                            alt="Avatar 7"
                            className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
                        />
                        <span className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px border bg-neutral-100 text-secondary-light text-xs d-inline-flex align-items-center justify-content-center">
                            +5
                        </span>
                        <button
                            type="button"
                            className="w-32-px h-32-px rounded-circle border border-primary-600 text-primary-600 ms-8 border-dashed text-secondary-light text-lg d-inline-flex align-items-center justify-content-center"
                        >
                            <Icon icon="ic:baseline-plus" className="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarGroup