import React from 'react'

const HeadingFont = () => {
    return (
        <div className="col-md-6">
            <div className="card h-100 p-0 shadow-lg border-0">
                <div className="card-header border-bottom-0 bg-gradient-primary text-white py-4 px-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-heading me-3 fs-5"></i>
                        <h6 className="text-white fw-bold mb-0">Typography Headings</h6>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-text-height me-2"></i>
                        <h6 className="text-white fw-semibold mb-0 opacity-75">Font Size</h6>
                    </div>
                </div>
                <div className="card-body py-4 px-4 bg-light">
                    <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm border-start border-primary border-4">
                        <h1 className="mb-0 text-primary fw-bold" style={{ fontFamily: 'Georgia, serif' }}>Heading 1</h1>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-primary-subtle text-primary fw-medium px-3 py-2">60px</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm border-start border-info border-4">
                        <h2 className="mb-0 text-info fw-bold" style={{ fontFamily: 'Georgia, serif' }}>Heading 2</h2>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-info-subtle text-info fw-medium px-3 py-2">48px</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm border-start border-success border-4">
                        <h3 className="mb-0 text-success fw-bold" style={{ fontFamily: 'Georgia, serif' }}>Heading 3</h3>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-success-subtle text-success fw-medium px-3 py-2">36px</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm border-start border-warning border-4">
                        <h4 className="mb-0 text-warning fw-bold" style={{ fontFamily: 'Georgia, serif' }}>Heading 4</h4>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-warning-subtle text-warning fw-medium px-3 py-2">30px</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm border-start border-danger border-4">
                        <h5 className="mb-0 text-danger fw-bold" style={{ fontFamily: 'Georgia, serif' }}>Heading 5</h5>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-danger-subtle text-danger fw-medium px-3 py-2">24px</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm border-start border-secondary border-4">
                        <h6 className="mb-0 text-secondary fw-bold" style={{ fontFamily: 'Georgia, serif' }}>Heading 6</h6>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-secondary-subtle text-secondary fw-medium px-3 py-2">20px</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-gradient-light border-0 py-3 px-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-info-circle text-primary me-2"></i>
                        <small className="text-muted fw-medium">Professional heading hierarchy with semantic structure</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingFont