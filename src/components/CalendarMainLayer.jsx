import React, { useEffect, useRef } from 'react'
import Calendar from './child/Calendar'
import { Icon } from '@iconify/react/dist/iconify.js'
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const DatePicker = ({ id, placeholder }) => {
    const datePickerRef = useRef(null);

    useEffect(() => {
        flatpickr(datePickerRef.current, {
            enableTime: true,
            dateFormat: 'd/m/Y H:i',
        });
    }, []);

    return (
        <input
            ref={datePickerRef}
            id={id}
            type="text"
            className="form-control radius-8 bg-base"
            placeholder={placeholder}
        />
    );
};


const CalendarMainLayer = () => {
    return (
        <>
            <div className="row gy-4">
                <div className="col-xxl-3 col-lg-4">
                    <div className="card h-100 p-0">
                        <div className="card-body p-24">
                            <button
                                type="button"
                                className="btn btn-primary text-sm btn-sm px-12 py-12 w-100 radius-8 d-flex align-items-center gap-2 mb-32"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <Icon
                                    icon="fa6-regular:square-plus"
                                    className="icon text-lg line-height-1"
                                />
                                Add Event
                            </button>
                            <div className="mt-32">
                                <div className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                    <div className="d-flex align-items-center gap-12">
                                        <span className="w-12 h-12 bg-primary-600 rounded-circle flex-shrink-0"></span>
                                        <div>
                                            <h6 className="text-md mb-0">Meeting with Team</h6>
                                            <span className="text-sm text-secondary-light">10:00 AM - 11:00 AM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                    <div className="d-flex align-items-center gap-12">
                                        <span className="w-12 h-12 bg-success-main rounded-circle flex-shrink-0"></span>
                                        <div>
                                            <h6 className="text-md mb-0">Project Review</h6>
                                            <span className="text-sm text-secondary-light">2:00 PM - 3:30 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                    <div className="d-flex align-items-center gap-12">
                                        <span className="w-12 h-12 bg-warning-main rounded-circle flex-shrink-0"></span>
                                        <div>
                                            <h6 className="text-md mb-0">Client Call</h6>
                                            <span className="text-sm text-secondary-light">4:00 PM - 5:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                    <div className="d-flex align-items-center gap-12">
                                        <span className="w-12 h-12 bg-purple rounded-circle flex-shrink-0"></span>
                                        <div>
                                            <h6 className="text-md mb-0">Design Workshop</h6>
                                            <span className="text-sm text-secondary-light">1:00 PM - 4:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                    <div className="d-flex align-items-center gap-12">
                                        <span className="w-12 h-12 bg-info-main rounded-circle flex-shrink-0"></span>
                                        <div>
                                            <h6 className="text-md mb-0">Code Review</h6>
                                            <span className="text-sm text-secondary-light">11:00 AM - 12:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                    <div className="d-flex align-items-center gap-12">
                                        <span className="w-12 h-12 bg-orange rounded-circle flex-shrink-0"></span>
                                        <div>
                                            <h6 className="text-md mb-0">Product Demo</h6>
                                            <span className="text-sm text-secondary-light">3:00 PM - 4:30 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-9 col-lg-8">
                    <div className="card h-100 p-0">
                        <div className="card-body p-24">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Event</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-24">
                            <form>
                                <div className="row">
                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">Event Title</label>
                                        <input type="text" className="form-control radius-8" placeholder="Enter event title" />
                                    </div>
                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">Event Description</label>
                                        <textarea className="form-control radius-8" rows="4" placeholder="Enter event description"></textarea>
                                    </div>
                                    <div className="col-sm-6 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">Start Date & Time</label>
                                        <DatePicker id="startDateTime" placeholder="Select start date & time" />
                                    </div>
                                    <div className="col-sm-6 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">End Date & Time</label>
                                        <DatePicker id="endDateTime" placeholder="Select end date & time" />
                                    </div>
                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">Event Color</label>
                                        <div className="d-flex align-items-center gap-12 flex-wrap">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="eventColor" id="primary" value="primary" defaultChecked />
                                                <label className="form-check-label" htmlFor="primary">
                                                    <span className="w-16 h-16 bg-primary-600 rounded-circle d-inline-block"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="eventColor" id="success" value="success" />
                                                <label className="form-check-label" htmlFor="success">
                                                    <span className="w-16 h-16 bg-success-main rounded-circle d-inline-block"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="eventColor" id="warning" value="warning" />
                                                <label className="form-check-label" htmlFor="warning">
                                                    <span className="w-16 h-16 bg-warning-main rounded-circle d-inline-block"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="eventColor" id="danger" value="danger" />
                                                <label className="form-check-label" htmlFor="danger">
                                                    <span className="w-16 h-16 bg-danger-main rounded-circle d-inline-block"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="eventColor" id="purple" value="purple" />
                                                <label className="form-check-label" htmlFor="purple">
                                                    <span className="w-16 h-16 bg-purple rounded-circle d-inline-block"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="eventColor" id="info" value="info" />
                                                <label className="form-check-label" htmlFor="info">
                                                    <span className="w-16 h-16 bg-info-main rounded-circle d-inline-block"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer p-24 border border-bottom-0 border-start-0 border-end-0">
                            <button type="button" className="btn btn-neutral-500 border-neutral-100 text-secondary-light btn-sm px-20 py-11" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary-600 btn-sm px-20 py-11">Save Event</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalendarMainLayer