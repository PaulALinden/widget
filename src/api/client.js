import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,  
    timeout: 10000,   
    headers: {        
        'Content-Type': 'application/json'
    }
});

// Lägg till interceptors (middleware) // ← Config
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => handleError(error)
);

export default apiClient; // Export den konfigurerade clienten