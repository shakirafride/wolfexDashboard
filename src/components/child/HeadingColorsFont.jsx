import React from 'react'

const HeadingColorsFont = () => {
    return (
        <div className="col-md-6">
            <div className="card h-100 p-0 shadow-lg border-0">
                <div className="card-header border-bottom-0 bg-gradient-success text-white py-4 px-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-palette me-3 fs-5"></i>
                        <h6 className="text-white fw-bold mb-0">Colorful Typography</h6>
                    </div>
                </div>
                <div className="card-body py-4 px-4 bg-light">
                    <div className="mb-3 p-4 bg-white rounded shadow-sm border-start border-primary border-5 position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 bg-primary opacity-10" style={{ width: '100px', height: '100px', borderRadius: '50%', transform: 'translate(30px, -30px)' }}></div>
                        <h1 className="text-primary fw-bold mb-0 position-relative" style={{ fontFamily: 'Georgia, serif' }}>
                            <i className="fas fa-crown me-3 text-warning"></i>Heading 1
                        </h1>
                    </div>
                    <div className="mb-3 p-4 bg-white rounded shadow-sm border-start border-success border-5 position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 bg-success opacity-10" style={{ width: '100px', height: '100px', borderRadius: '50%', transform: 'translate(30px, -30px)' }}></div>
                        <h2 className="text-success fw-bold mb-0 position-relative" style={{ fontFamily: 'Georgia, serif' }}>
                            <i className="fas fa-leaf me-3 text-success"></i>Heading 2
                        </h2>
                    </div>
                    <div className="mb-3 p-4 bg-white rounded shadow-sm border-start border-warning border-5 position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 bg-warning opacity-10" style={{ width: '100px', height: '100px', borderRadius: '50%', transform: 'translate(30px, -30px)' }}></div>
                        <h3 className="text-warning fw-bold mb-0 position-relative" style={{ fontFamily: 'Georgia, serif' }}>
                            <i className="fas fa-sun me-3 text-warning"></i>Heading 3
                        </h3>
                    </div>
                    <div className="mb-3 p-4 bg-white rounded shadow-sm border-start border-danger border-5 position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 bg-danger opacity-10" style={{ width: '100px', height: '100px', borderRadius: '50%', transform: 'translate(30px, -30px)' }}></div>
                        <h4 className="text-danger fw-bold mb-0 position-relative" style={{ fontFamily: 'Georgia, serif' }}>
                            <i className="fas fa-heart me-3 text-danger"></i>Heading 4
                        </h4>
                    </div>
                    <div className="mb-3 p-4 bg-white rounded shadow-sm border-start border-info border-5 position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 bg-info opacity-10" style={{ width: '100px', height: '100px', borderRadius: '50%', transform: 'translate(30px, -30px)' }}></div>
                        <h5 className="text-info fw-bold mb-0 position-relative" style={{ fontFamily: 'Georgia, serif' }}>
                            <i className="fas fa-star me-3 text-info"></i>Heading 5
                        </h5>
                    </div>
                    <div className="p-4 bg-white rounded shadow-sm border-start border-secondary border-5 position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 bg-secondary opacity-10" style={{ width: '100px', height: '100px', borderRadius: '50%', transform: 'translate(30px, -30px)' }}></div>
                        <h6 className="text-secondary fw-bold mb-0 position-relative" style={{ fontFamily: 'Georgia, serif' }}>
                            <i className="fas fa-gem me-3 text-secondary"></i>Heading 6
                        </h6>
                    </div>
                </div>
                <div className="card-footer bg-gradient-light border-0 py-3 px-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-paint-brush text-success me-2"></i>
                        <small className="text-muted fw-medium">Vibrant color palette for expressive typography</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingColorsFont