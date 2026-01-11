import React, { useState } from 'react'

const TextareaInputField = () => {
    const [textareaValues, setTextareaValues] = useState({
        description: '',
        feedback: '',
        validation: ''
    });
    const [focusedField, setFocusedField] = useState('');

    const handleTextareaChange = (field, value) => {
        setTextareaValues(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField('');
    };

    return (
        <div className="col-lg-12">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-gradient-primary text-white border-0 py-3">
                    <div className="d-flex align-items-center">
                        <div className="icon-wrapper me-3">
                            <i className="fas fa-edit fs-5"></i>
                        </div>
                        <div>
                            <h5 className="card-title mb-1 fw-bold">Interactive Textarea Fields</h5>
                            <p className="mb-0 opacity-75 small">Enhanced text areas with dynamic feedback</p>
                        </div>
                    </div>
                </div>
                <div className="card-body p-4">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="form-floating position-relative">
                                <textarea
                                    id="description"
                                    className={`form-control ${focusedField === 'description' ? 'border-primary shadow-sm' : ''} ${textareaValues.description ? 'has-content' : ''}`}
                                    rows={4}
                                    placeholder="Enter your description here..."
                                    value={textareaValues.description}
                                    onChange={(e) => handleTextareaChange('description', e.target.value)}
                                    onFocus={() => handleFocus('description')}
                                    onBlur={handleBlur}
                                    style={{
                                        minHeight: '120px',
                                        transition: 'all 0.3s ease',
                                        resize: 'vertical'
                                    }}
                                />
                                <label htmlFor="description" className="form-label">
                                    <i className="fas fa-pen-alt me-2"></i>Project Description
                                </label>
                                <div className="character-count mt-2">
                                    <small className={`text-muted ${textareaValues.description.length > 100 ? 'text-warning' : ''}`}>
                                        {textareaValues.description.length}/500 characters
                                    </small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="form-floating position-relative">
                                <textarea
                                    id="feedback"
                                    className={`form-control bg-light ${focusedField === 'feedback' ? 'border-info shadow-sm' : ''}`}
                                    rows={4}
                                    placeholder="This field is read-only..."
                                    value="This is a read-only textarea field. You can use this for displaying information that users should not modify, such as terms and conditions, generated content, or system messages."
                                    readOnly
                                    onFocus={() => handleFocus('feedback')}
                                    onBlur={handleBlur}
                                    style={{
                                        minHeight: '120px',
                                        transition: 'all 0.3s ease',
                                        cursor: 'not-allowed'
                                    }}
                                />
                                <label htmlFor="feedback" className="form-label">
                                    <i className="fas fa-lock me-2"></i>Read-Only Content
                                </label>
                                <div className="readonly-indicator mt-2">
                                    <small className="text-info">
                                        <i className="fas fa-info-circle me-1"></i>This field is protected
                                    </small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="form-floating position-relative">
                                <textarea
                                    id="validation"
                                    className={`form-control ${focusedField === 'validation' ? 'border-success shadow-sm' : ''} ${textareaValues.validation.length < 10 && textareaValues.validation.length > 0 ? 'is-invalid' : textareaValues.validation.length >= 10 ? 'is-valid' : ''}`}
                                    rows={4}
                                    placeholder="Enter at least 10 characters..."
                                    value={textareaValues.validation}
                                    onChange={(e) => handleTextareaChange('validation', e.target.value)}
                                    onFocus={() => handleFocus('validation')}
                                    onBlur={handleBlur}
                                    required
                                    style={{
                                        minHeight: '120px',
                                        transition: 'all 0.3s ease',
                                        resize: 'vertical'
                                    }}
                                />
                                <label htmlFor="validation" className="form-label">
                                    <i className="fas fa-check-circle me-2"></i>Validated Feedback
                                </label>
                                {textareaValues.validation.length < 10 && textareaValues.validation.length > 0 && (
                                    <div className="invalid-feedback">
                                        <i className="fas fa-exclamation-triangle me-1"></i>
                                        Please enter at least 10 characters. Current: {textareaValues.validation.length}
                                    </div>
                                )}
                                {textareaValues.validation.length >= 10 && (
                                    <div className="valid-feedback">
                                        <i className="fas fa-check me-1"></i>
                                        Great! Your input looks good.
                                    </div>
                                )}
                                <div className="validation-progress mt-2">
                                    <div className="progress" style={{ height: '3px' }}>
                                        <div 
                                            className={`progress-bar ${textareaValues.validation.length >= 10 ? 'bg-success' : 'bg-warning'}`}
                                            style={{ 
                                                width: `${Math.min((textareaValues.validation.length / 10) * 100, 100)}%`,
                                                transition: 'width 0.3s ease'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="alert alert-light border-0 bg-gradient-light">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-lightbulb text-warning me-3 fs-5"></i>
                                    <div>
                                        <h6 className="mb-1 fw-bold">Interactive Features</h6>
                                        <p className="mb-0 small text-muted">
                                            These textarea fields include character counting, validation feedback, focus states, and dynamic styling for enhanced user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextareaInputField