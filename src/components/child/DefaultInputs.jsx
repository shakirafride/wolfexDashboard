import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const DefaultInputs = () => {
    const [focusedInput, setFocusedInput] = useState('');
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (name, value) => {
        setInputValues(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="col-md-6">
            <div className="card shadow-sm border-0 radius-12">
                <div className="card-header bg-gradient-primary text-white py-20 px-24">
                    <h6 className="card-title mb-0 text-white fw-semibold">Interactive Input Fields</h6>
                </div>
                <div className="card-body p-24">
                    <div className="row gy-4">
                        <div className="col-12">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    className={`form-control border-2 ${focusedInput === 'basic' ? 'border-primary shadow-sm' : 'border-light'}`}
                                    id="basicInput"
                                    placeholder="Enter your name"
                                    onFocus={() => setFocusedInput('basic')}
                                    onBlur={() => setFocusedInput('')}
                                    onChange={(e) => handleInputChange('basic', e.target.value)}
                                />
                                <label htmlFor="basicInput" className="text-secondary-light">
                                    <Icon icon="mdi:account" className="me-2" />
                                    Full Name
                                </label>
                            </div>
                        </div>
                        
                        <div className="col-12">
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className={`form-control border-2 ${focusedInput === 'email' ? 'border-success shadow-sm' : 'border-light'}`}
                                    id="emailInput"
                                    placeholder="info@gmail.com"
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput('')}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                />
                                <label htmlFor="emailInput" className="text-secondary-light">
                                    <Icon icon="mdi:email" className="me-2" />
                                    Email Address
                                </label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input
                                    type="tel"
                                    className={`form-control border-2 ${focusedInput === 'phone' ? 'border-warning shadow-sm' : 'border-light'}`}
                                    id="phoneInput"
                                    placeholder="+1 (555) 253-08515"
                                    onFocus={() => setFocusedInput('phone')}
                                    onBlur={() => setFocusedInput('')}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                />
                                <label htmlFor="phoneInput" className="text-secondary-light">
                                    <Icon icon="mdi:phone" className="me-2" />
                                    Phone Number
                                </label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input 
                                    type="date" 
                                    className={`form-control border-2 ${focusedInput === 'date' ? 'border-info shadow-sm' : 'border-light'}`}
                                    id="dateInput"
                                    onFocus={() => setFocusedInput('date')}
                                    onBlur={() => setFocusedInput('')}
                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                />
                                <label htmlFor="dateInput" className="text-secondary-light">
                                    <Icon icon="mdi:calendar" className="me-2" />
                                    Select Date
                                </label>
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:credit-card" className="me-2" />
                                Payment Information
                            </label>
                            <div className="input-group shadow-sm">
                                <span className="input-group-text bg-primary-50 border-primary-200">
                                    <Icon icon="mdi:credit-card" className="text-primary-600" />
                                </span>
                                <input
                                    type="text"
                                    className={`form-control border-2 ${focusedInput === 'card' ? 'border-primary' : 'border-primary-200'}`}
                                    placeholder="1234 5678 9012 3456"
                                    onFocus={() => setFocusedInput('card')}
                                    onBlur={() => setFocusedInput('')}
                                    onChange={(e) => handleInputChange('card', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced Input Group Card */}
            <div className="card shadow-sm border-0 radius-12 mt-24">
                <div className="card-header bg-gradient-success text-white py-20 px-24">
                    <h6 className="card-title mb-0 text-white fw-semibold">Advanced Input Groups</h6>
                </div>
                <div className="card-body p-24">
                    <div className="row gy-4">
                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:email-outline" className="me-2" />
                                Email with Icon
                            </label>
                            <div className="input-group shadow-sm">
                                <span className="input-group-text bg-success-50 border-success-200">
                                    <Icon icon="mdi:email" className="text-success-600" />
                                </span>
                                <input
                                    type="email"
                                    className={`form-control border-2 ${focusedInput === 'groupEmail' ? 'border-success' : 'border-success-200'}`}
                                    placeholder="Enter your email"
                                    onFocus={() => setFocusedInput('groupEmail')}
                                    onBlur={() => setFocusedInput('')}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:web" className="me-2" />
                                Website URL
                            </label>
                            <div className="input-group shadow-sm">
                                <span className="input-group-text bg-info-50 border-info-200 fw-medium">
                                    https://
                                </span>
                                <input
                                    type="text"
                                    className={`form-control border-2 ${focusedInput === 'website' ? 'border-info' : 'border-info-200'}`}
                                    placeholder="www.example.com"
                                    onFocus={() => setFocusedInput('website')}
                                    onBlur={() => setFocusedInput('')}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-medium text-secondary-light mb-8">
                                <Icon icon="mdi:link" className="me-2" />
                                Copy Link
                            </label>
                            <div className="input-group shadow-sm">
                                <input
                                    type="text"
                                    className="form-control border-2 border-warning-200"
                                    placeholder="https://example.com/share-link"
                                    readOnly
                                />
                                <button 
                                    type="button" 
                                    className="btn btn-warning border-warning-200 px-16"
                                    onClick={() => navigator.clipboard?.writeText('https://example.com/share-link')}
                                >
                                    <Icon icon="mdi:content-copy" className="me-2" />
                                    Copy
                                </button>
                            </div>
                            <p className="text-sm mt-8 mb-0 text-secondary-light">
                                <Icon icon="mdi:information" className="me-1" />
                                Click copy to share this link with others.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultInputs;