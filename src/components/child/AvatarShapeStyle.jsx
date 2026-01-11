import React from 'react'

const AvatarShapeStyle = () => {
    return (
        <div className="col-xxl-6 col-md-6">
            <div className="card p-0 overflow-hidden position-relative radius-12">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">Avatar Shape Style</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap justify-content-between gap-3">
                        <img
                            src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&h=120&fit=crop&crop=face"
                            alt="Square Avatar"
                            className="w-120-px h-120-px radius-8 object-fit-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=120&h=120&fit=crop&crop=face"
                            alt="Circle Avatar"
                            className="w-120-px h-120-px rounded-circle object-fit-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face"
                            alt="Rounded Avatar"
                            className="w-auto h-120-px object-fit-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarShapeStyle