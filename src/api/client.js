import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,  
    timeout: 10000,   
    headers: {        
        'Content-Type': 'application/json'
    }
});

function handleError(error) { 
    console.error(error);
}

// Lägg till interceptors (middleware) // ← Config
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => handleError(error)
);

export default apiClient; // Export den konfigurerade clienten