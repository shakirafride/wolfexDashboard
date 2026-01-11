import React from 'react'

const TextDecorationFont = () => {
    return (
        <div className="col-md-6">
            <div className="card h-100 p-0 shadow-lg border-0">
                <div className="card-header border-bottom-0 bg-gradient-secondary text-white py-4 px-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-underline me-3 fs-5"></i>
                        <h6 className="text-white fw-bold mb-0">Text Decorations</h6>
                    </div>
                </div>
                <div className="card-body py-4 px-4 bg-light">
                    <div className="mb-4 p-4 bg-white rounded shadow-sm border border-secondary border-2">
                        <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-info-circle text-secondary me-2"></i>
                            <h6 className="text-secondary fw-bold mb-0">Decoration Guide</h6>
                        </div>
                        <p className="mb-0 text-dark fw-normal">
                            Use text-decoration classes to enhance text presentation with underlines, 
                            strikethroughs, or remove decorations for clean styling.
                        </p>
                    </div>
                    
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-primary border-4">
                        <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-underline text-primary me-2"></i>
                            <span className="badge bg-primary-subtle text-primary fw-medium">Underlined</span>
                        </div>
                        <p className="mb-0 text-primary fw-medium text-decoration-underline">
                            This text has a stylish line underneath it for emphasis.
                        </p>
                    </div>
                    
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-danger border-4">
                        <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-strikethrough text-danger me-2"></i>
                            <span className="badge bg-danger-subtle text-danger fw-medium">Strikethrough</span>
                        </div>
                        <p className="mb-0 text-danger fw-medium text-decoration-line-through">
                            This text has a line going through it to show deletion.
                        </p>
                    </div>
                    
                    <div className="p-3 bg-white rounded shadow-sm border-start border-success border-4">
                        <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-times text-success me-2"></i>
                            <span className="badge bg-success-subtle text-success fw-medium">No Decoration</span>
                        </div>
                        <p className="mb-0 text-success fw-medium">
                            This link has its text decoration removed for clean appearance.
                        </p>
                    </div>
                </div>
                <div className="card-footer bg-gradient-light border-0 py-3 px-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-magic text-secondary me-2"></i>
                        <small className="text-muted fw-medium">Professional text decoration styles for modern interfaces</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextDecorationFont