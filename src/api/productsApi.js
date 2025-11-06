import apiClient from './client';

export const productsApi = {
    getStoreConfig: (storeId) => {
        return apiClient.get(`/stores/${storeId}/config`);
    },

    calculatePrice: (storeId, selections) => {
        return apiClient.post('/calculate-price', { storeId, selections });
    }, 

    uploadPrescription: async (file) => {
        const formData = new FormData();
        formData.append('prescription', file);

        return await apiClient.post('/upload/prescription', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
};

