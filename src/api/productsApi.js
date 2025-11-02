import apiClient from './client';

export const productsApi = {
    getStoreConfig: (storeId) => {
        return apiClient.get(`/stores/${storeId}/config`);
    },

    calculatePrice: (storeId, selections) => {
        return apiClient.post('/calculate-price', { storeId, selections });
    }
};