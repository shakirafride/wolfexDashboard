import React from 'react'

const TextFont = () => {
    return (
        <div className="col-md-6">
            <div className="card h-100 p-0 shadow-lg border-0">
                <div className="card-header border-bottom-0 bg-gradient-danger text-white py-4 px-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-font me-3 fs-5"></i>
                        <h6 className="text-white fw-bold mb-0">Text Sizes</h6>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-expand-arrows-alt me-2"></i>
                        <h6 className="text-white fw-semibold mb-0 opacity-75">Font Size</h6>
                    </div>
                </div>
                <div className="card-body py-4 px-4 bg-light">
                    <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm border-start border-danger border-4 position-relative">
                        <div className="d-flex align-items-center">
                            <div className="bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <i className="fas fa-text-height text-white"></i>
                            </div>
                            <p className="text-lg text-danger fw-medium mb-0" style={{ fontFamily: 'Roboto, sans-serif' }}>Large Text Sample</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-danger-subtle text-danger fw-bold px-3 py-2">18px</span>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm border-start border-primary border-4 position-relative">
                        <div className="d-flex align-items-center">
                            <div className="bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}>
                                <i className="fas fa-font text-white"></i>
                            </div>
                            <p className="text-md text-primary fw-medium mb-0" style={{ fontFamily: 'Roboto, sans-serif' }}>Medium Text Sample</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-primary-subtle text-primary fw-bold px-3 py-2">16px</span>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm border-start border-success border-4 position-relative">
                        <div className="d-flex align-items-center">
                            <div className="bg-success rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                                <i className="fas fa-text-width text-white"></i>
                            </div>
                            <p className="text-sm text-success fw-medium mb-0" style={{ fontFamily: 'Roboto, sans-serif' }}>Small Text Sample</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-success-subtle text-success fw-bold px-3 py-2">14px</span>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm border-start border-warning border-4 position-relative">
                        <div className="d-flex align-items-center">
                            <div className="bg-warning rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '25px', height: '25px' }}>
                                <i className="fas fa-compress-arrows-alt text-white"></i>
                            </div>
                            <p className="text-xs text-warning fw-medium mb-0" style={{ fontFamily: 'Roboto, sans-serif' }}>Extra Small Text</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-warning-subtle text-warning fw-bold px-3 py-2">12px</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-gradient-light border-0 py-3 px-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-ruler text-danger me-2"></i>
                        <small className="text-muted fw-medium">Responsive text sizing for optimal readability</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextFont