// client.js — konfigurerad axios-instans för API-anrop
import axios from 'axios';

const apiClient = axios.create({
    // Bas-URL läses från miljön (VITE_API_URL)
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

function handleError(error) {
    // Enkel fel-logging;
    console.error(error);
}

// Enkel response-interceptor: returnera response.data direkt
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => handleError(error)
);

export default apiClient; // Exportera den konfigurerade klienten