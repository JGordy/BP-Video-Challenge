import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';

const ErrorMessage = forwardRef(({ message, onClose }, ref) => {
    return ReactDOM.createPortal(
        <div ref={ref} className="toast error">
            <div className="toast-body">
                {message}
            </div>
            <button className="toast-close" onClick={onClose}>
                &times;
            </button>
        </div>,
        document.getElementById('error-root')
    );
});

export default ErrorMessage;