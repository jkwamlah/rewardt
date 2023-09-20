import React from 'react';

interface ResourceModalProps {
    modalId: string,
    onClose: () => void
}

const ResourceModal: React.FC<ResourceModalProps> = ({ modalId }) => {
    return (
        <div className="modal fade show" id={modalId} tabIndex={-1} role="dialog" aria-modal="true"
             style={{display: 'block'}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content rounded shadow-lg border-0 overflow-hidden">
                    <div className="modal-body py-5">
                        <div className="text-center">
                            <div
                                className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                                style={{height: '95px', width: '95px'}}>
                                <h1 className="mb-0"><i className="uil uil-heart-break align-middle"/></h1>
                            </div>
                            <div className="mt-4">
                                <h4>Your wishlist is empty.</h4>
                                <p className="text-muted">Create your first wishlist request...</p>
                                <div className="mt-4">
                                    <a href="#" className="btn btn-outline-primary">+ Create new wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceModal;
