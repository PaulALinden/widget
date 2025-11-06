import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

// API för att mounta widget
window.OpticalWidget = {
    mount: (elementId, options = {}) => {
        const container = document.getElementById(elementId);
        if (!container) {
            console.error(`Element with id "${elementId}" not found`);
            return;
        }

        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <App storeId={options.storeId} />
            </React.StrictMode>
        );
    }
};

// Auto-mount om element finns
if (document.getElementById('optical-widget')) {
    window.OpticalWidget.mount('optical-widget');
}