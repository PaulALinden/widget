// productsApi.js — enkel wrapper runt api-clienten för att hämta config och kalkylera pris
import apiClient from './client';

export const productsApi = {
    // Hämta butikskonfiguration (glastyper, tints, frames etc.)
    getStoreConfig: (storeId) => {
        return apiClient.get(`/stores/${storeId}/config`);
    },

    // Skicka användarens val till backend för prisberäkning
    calculatePrice: (storeId, selections) => {
        return apiClient.post('/calculate-price', { storeId, selections });
    }, 

    // Ladda upp receptfil
    uploadPrescription: async (file) => {
        const formData = new FormData();
        formData.append('prescription', file);

        return await apiClient.post('/upload/prescription', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
};

