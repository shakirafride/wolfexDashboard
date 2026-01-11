import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const InputSizing = () => {
    const [focusedInput, setFocusedInput] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState({});

    const handleFileUpload = (size, files) => {
        setUploadedFiles(prev => ({ ...prev, [size]: files[0]?.name || '' }));
    };

    return (
        <div className="col-md-6">
            <div className="card shadow-sm border-0 radius-12">
                <div className="card-header bg-gradient-warning text-white py-20 px-24">
                    <h6 className="card-title mb-0 text-white fw-semibold">Dynamic Input Sizing</h6>
                </div>
                <div className="card-body p-24">
                    <div className="row gy-4">
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:format-size" className="me-2" />
                                Large Input Field
                            </label>
                            <input
                                type="text"
                                className={`form-control form-control-lg border-2 shadow-sm ${focusedInput === 'large' ? 'border-warning' : 'border-light'}`}
                                placeholder="Enter large text here..."
                                onFocus={() => setFocusedInput('large')}
                                onBlur={() => setFocusedInput('')}
                                style={{
                                    transition: 'all 0.3s ease',
                                    transform: focusedInput === 'large' ? 'scale(1.02)' : 'scale(1)'
                                }}
                            />
                        </div>
                        
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:format-text" className="me-2" />
                                Medium Input Field
                            </label>
                            <input
                                type="text"
                                className={`form-control border-2 shadow-sm ${focusedInput === 'medium' ? 'border-success' : 'border-light'}`}
                                placeholder="Enter medium text here..."
                                onFocus={() => setFocusedInput('medium')}
                                onBlur={() => setFocusedInput('')}
                                style={{
                                    transition: 'all 0.3s ease',
                                    transform: focusedInput === 'medium' ? 'scale(1.02)' : 'scale(1)'
                                }}
                            />
                        </div>
                        
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:format-font-size-decrease" className="me-2" />
                                Small Input Field
                            </label>
                            <input
                                type="text"
                                className={`form-control form-control-sm border-2 shadow-sm ${focusedInput === 'small' ? 'border-info' : 'border-light'}`}
                                placeholder="Enter small text here..."
                                onFocus={() => setFocusedInput('small')}
                                onBlur={() => setFocusedInput('')}
                                style={{
                                    transition: 'all 0.3s ease',
                                    transform: focusedInput === 'small' ? 'scale(1.05)' : 'scale(1)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced File Upload Card */}
            <div className="card shadow-sm border-0 radius-12 mt-24">
                <div className="card-header bg-gradient-info text-white py-20 px-24">
                    <h6 className="card-title mb-0 text-white fw-semibold">Interactive File Uploads</h6>
                </div>
                <div className="card-body p-24">
                    <div className="row gy-4">
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:cloud-upload" className="me-2" />
                                Large File Upload
                            </label>
                            <div className="position-relative">
                                <input
                                    className="form-control form-control-lg border-2 border-dashed border-info"
                                    type="file"
                                    onChange={(e) => handleFileUpload('large', e.target.files)}
                                    style={{ 
                                        padding: '20px',
                                        background: uploadedFiles.large ? '#e3f2fd' : 'transparent'
                                    }}
                                />
                                {uploadedFiles.large && (
                                    <div className="position-absolute top-50 start-50 translate-middle pointer-events-none">
                                        <Icon icon="mdi:check-circle" className="text-success fs-4" />
                                    </div>
                                )}
                            </div>
                            {uploadedFiles.large && (
                                <p className="text-sm mt-8 mb-0 text-success">
                                    <Icon icon="mdi:file-check" className="me-1" />
                                    Uploaded: {uploadedFiles.large}
                                </p>
                            )}
                        </div>
                        
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:file-upload" className="me-2" />
                                Medium File Upload
                            </label>
                            <div className="position-relative">
                                <input 
                                    className="form-control border-2 border-dashed border-warning" 
                                    type="file"
                                    onChange={(e) => handleFileUpload('medium', e.target.files)}
                                    style={{ 
                                        background: uploadedFiles.medium ? '#fff3e0' : 'transparent'
                                    }}
                                />
                                {uploadedFiles.medium && (
                                    <div className="position-absolute top-50 end-0 translate-middle-y me-3 pointer-events-none">
                                        <Icon icon="mdi:check-circle" className="text-success" />
                                    </div>
                                )}
                            </div>
                            {uploadedFiles.medium && (
                                <p className="text-sm mt-8 mb-0 text-warning-600">
                                    <Icon icon="mdi:file-check" className="me-1" />
                                    Uploaded: {uploadedFiles.medium}
                                </p>
                            )}
                        </div>
                        
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:paperclip" className="me-2" />
                                Small File Upload
                            </label>
                            <div className="position-relative">
                                <input
                                    className="form-control form-control-sm border-2 border-dashed border-success"
                                    type="file"
                                    onChange={(e) => handleFileUpload('small', e.target.files)}
                                    style={{ 
                                        background: uploadedFiles.small ? '#e8f5e8' : 'transparent'
                                    }}
                                />
                                {uploadedFiles.small && (
                                    <div className="position-absolute top-50 end-0 translate-middle-y me-2 pointer-events-none">
                                        <Icon icon="mdi:check-circle" className="text-success fs-6" />
                                    </div>
                                )}
                            </div>
                            {uploadedFiles.small && (
                                <p className="text-sm mt-8 mb-0 text-success">
                                    <Icon icon="mdi:file-check" className="me-1" />
                                    Uploaded: {uploadedFiles.small}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced Custom Forms Card */}
            <div className="card shadow-sm border-0 radius-12 mt-24">
                <div className="card-header bg-gradient-danger text-white py-20 px-24">
                    <h6 className="card-title mb-0 text-white fw-semibold">Smart Custom Forms</h6>
                </div>
                <div className="card-body p-24">
                    <div className="row gy-4">
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:lock" className="me-2" />
                                Read-only Field
                            </label>
                            <div className="input-group">
                                <span className="input-group-text bg-danger-50 border-danger-200">
                                    <Icon icon="mdi:shield-check" className="text-danger-600" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-danger-200 bg-danger-50"
                                    defaultValue="admin@company.com"
                                    readOnly
                                />
                            </div>
                            <p className="text-sm mt-8 mb-0 text-danger-600">
                                <Icon icon="mdi:information" className="me-1" />
                                This field cannot be modified
                            </p>
                        </div>
                        
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:phone-settings" className="me-2" />
                                Smart Phone Input
                            </label>
                            <div className="form-mobile-field shadow-sm">
                                <select className="form-select border-2 border-primary-200 bg-primary-50" defaultValue="US">
                                    <option value="US">🇺🇸 +1</option>
                                    <option value="UK">🇬🇧 +44</option>
                                    <option value="BD">🇧🇩 +880</option>
                                    <option value="EU">🇪🇺 +49</option>
                                </select>
                                <input
                                    type="tel"
                                    className={`form-control border-2 ${focusedInput === 'phone' ? 'border-primary' : 'border-primary-200'}`}
                                    placeholder="(555) 000-0000"
                                    onFocus={() => setFocusedInput('phone')}
                                    onBlur={() => setFocusedInput('')}
                                />
                            </div>
                        </div>
                        
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:file-document" className="me-2" />
                                Document Upload
                            </label>
                            <div className="position-relative">
                                <input 
                                    className="form-control border-2 border-dashed border-primary" 
                                    type="file" 
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => handleFileUpload('document', e.target.files)}
                                />
                                <div className="position-absolute top-0 end-0 mt-2 me-2">
                                    <Icon icon="mdi:file-pdf-box" className="text-danger fs-5" />
                                </div>
                            </div>
                            <p className="text-sm mt-8 mb-0 text-secondary-light">
                                <Icon icon="mdi:information" className="me-1" />
                                Accepts PDF, DOC, DOCX files only
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputSizing;