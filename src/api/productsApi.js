import apiClient from './client';

export const productsApi = {
    getStoreConfig: (storeId) => {
        return apiClient.get(`/stores/${storeId}/config`);
        // apiClient har redan baseURL, så blir:
        // GET http://localhost:3001/api/stores/store_1/config
    },

    calculatePrice: (storeId, selections) => {
        return apiClient.post('/calculate-price', { storeId, selections });
    }
};