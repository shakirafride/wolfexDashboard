import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const AIFeaturesShowcase = () => {
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center gap-2 mb-20">
                        <Icon icon="material-symbols:psychology" className="text-2xl text-primary-600" />
                        <h6 className="mb-0 fw-bold text-lg">AI Features & Capabilities</h6>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="card border h-100">
                                <div className="card-body text-center p-20">
                                    <img
                                        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                                        alt="AI Text Generation"
                                        className="w-100 h-100-px object-fit-cover rounded-8 mb-16"
                                    />
                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-8">
                                        <Icon icon="material-symbols:edit-document" className="text-xl text-primary-600" />
                                        <h6 className="text-md mb-0">Text Generation</h6>
                                    </div>
                                    <p className="text-sm text-secondary-light mb-12">
                                        Advanced AI-powered content creation for blogs, articles, and marketing copy.
                                    </p>
                                    <span className="badge bg-primary-50 text-primary-600 px-12 py-6">
                                        <Icon icon="material-symbols:trending-up" className="me-1" />
                                        +25% Usage
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card border h-100">
                                <div className="card-body text-center p-20">
                                    <img
                                        src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                                        alt="AI Image Generation"
                                        className="w-100 h-100-px object-fit-cover rounded-8 mb-16"
                                    />
                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-8">
                                        <Icon icon="material-symbols:image" className="text-xl text-success-main" />
                                        <h6 className="text-md mb-0">Image Creation</h6>
                                    </div>
                                    <p className="text-sm text-secondary-light mb-12">
                                        Generate stunning visuals and artwork using state-of-the-art AI models.
                                    </p>
                                    <span className="badge bg-success-50 text-success-main px-12 py-6">
                                        <Icon icon="material-symbols:trending-up" className="me-1" />
                                        +40% Usage
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card border h-100">
                                <div className="card-body text-center p-20">
                                    <img
                                        src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                                        alt="AI Code Generation"
                                        className="w-100 h-100-px object-fit-cover rounded-8 mb-16"
                                    />
                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-8">
                                        <Icon icon="material-symbols:code" className="text-xl text-warning-main" />
                                        <h6 className="text-md mb-0">Code Assistant</h6>
                                    </div>
                                    <p className="text-sm text-secondary-light mb-12">
                                        Intelligent code completion, debugging, and optimization assistance.
                                    </p>
                                    <span className="badge bg-warning-50 text-warning-main px-12 py-6">
                                        <Icon icon="material-symbols:trending-up" className="me-1" />
                                        +35% Usage
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card border h-100">
                                <div className="card-body text-center p-20">
                                    <img
                                        src="https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                                        alt="AI Analytics"
                                        className="w-100 h-100-px object-fit-cover rounded-8 mb-16"
                                    />
                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-8">
                                        <Icon icon="material-symbols:analytics" className="text-xl text-info-main" />
                                        <h6 className="text-md mb-0">Smart Analytics</h6>
                                    </div>
                                    <p className="text-sm text-secondary-light mb-12">
                                        Predictive analytics and insights powered by machine learning algorithms.
                                    </p>
                                    <span className="badge bg-info-50 text-info-main px-12 py-6">
                                        <Icon icon="material-symbols:trending-up" className="me-1" />
                                        +50% Usage
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIFeaturesShowcase;