// widget.jsx — Exponerar ett enkelt globalt API för att mounta widgeten
// Filen hanterar auto-mount om ett element med id "optical-widget" finns
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

// API för att mounta widget
window.OpticalWidget = {
    mount: (elementId = {}) => {
            const container = document.getElementById(elementId);
            if (!container) {
                // Ge användaren ett tydligt fel om elementet inte finns
                console.error(`Element with id "${elementId}" not found`);
                return;
            }

        // Skapa React-root och rendera App.
        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        );
    }
};

// Auto-mount om element finns
if (document.getElementById('optical-widget')) {
    window.OpticalWidget.mount('optical-widget');
}