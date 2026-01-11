import React from 'react'

const InlineTextElementsFont = () => {
    return (
        <div className="col-md-6">
            <div className="card h-100 p-0 shadow-lg border-0">
                <div className="card-header border-bottom-0 bg-gradient-warning text-white py-4 px-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-text-width me-3 fs-5"></i>
                        <h6 className="text-white fw-bold mb-0">Text Styling Elements</h6>
                    </div>
                </div>
                <div className="card-body py-4 px-4 bg-light">
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-warning border-3">
                        <p className="mb-0 text-dark fw-normal">
                            <i className="fas fa-highlighter text-warning me-2"></i>
                            You can use the mark tag to{" "}
                            <span className="bg-warning text-dark px-2 py-1 rounded fw-bold">
                                highlight important text
                            </span>{" "}
                            for emphasis
                        </p>
                    </div>
                    
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-danger border-3">
                        <p className="mb-0 text-danger fw-normal text-decoration-line-through">
                            <i className="fas fa-times-circle text-danger me-2"></i>
                            This paragraph shows deleted or outdated content
                        </p>
                    </div>
                    
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-secondary border-3">
                        <p className="mb-0 text-secondary fw-normal text-decoration-line-through">
                            <i className="fas fa-strikethrough text-secondary me-2"></i>
                            This line is meant to be treated as no longer accurate
                        </p>
                    </div>
                    
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-info border-3">
                        <p className="mb-0 text-info fw-normal text-decoration-underline">
                            <i className="fas fa-underline text-info me-2"></i>
                            This line of text will render as underlined
                        </p>
                    </div>
                    
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-success border-3">
                        <p className="mb-0 text-success fw-normal text-decoration-underline">
                            <i className="fas fa-plus-circle text-success me-2"></i>
                            This line represents an addition to the document
                        </p>
                    </div>
                    
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-primary border-3">
                        <p className="mb-0 text-primary fw-normal">
                            <i className="fas fa-paragraph text-primary me-2"></i>
                            This is a standard paragraph with normal styling
                        </p>
                    </div>
                    
                    <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-dark border-3">
                        <p className="mb-0 text-dark fw-bold">
                            <i className="fas fa-bold text-dark me-2"></i>
                            This line rendered as bold text for emphasis
                        </p>
                    </div>
                    
                    <div className="p-3 bg-white rounded shadow-sm border-start border-muted border-3">
                        <p className="mb-0 text-muted fst-italic">
                            <i className="fas fa-italic text-muted me-2"></i>
                            This line rendered as italicized text for style
                        </p>
                    </div>
                </div>
                <div className="card-footer bg-gradient-light border-0 py-3 px-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-tools text-warning me-2"></i>
                        <small className="text-muted fw-medium">Comprehensive text formatting and styling options</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InlineTextElementsFont