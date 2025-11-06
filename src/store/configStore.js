import { create } from 'zustand';
import { productsApi } from '../api/productsApi';

export const useConfigStore = create((set, get) => ({
    storeId: import.meta.env.VITE_STORE_ID,
    config: null,
    selections: {},
    pricing: { total: 0 },
    currentStep: 0,
    file: null, 

    loadConfig: async () => {
        const response = await productsApi.getStoreConfig(import.meta.env.VITE_STORE_ID);
        set({ config: response.data, storeId: import.meta.env.VITE_STORE_ID });
    },

    setFile: (file) => set({ file }), 

    updateSelection: async (key, value) => {
        set((state) => ({
            selections: { ...state.selections, [key]: value }
        }));

        const { storeId, selections } = get();
        const newSelections = { ...selections, [key]: value };

        try {
            const response = await productsApi.calculatePrice(storeId, newSelections);
            set({ pricing: response.data });
        } catch (error) {
            console.error('Price failed:', error);
        }
    },

    uploadFile: async () => {
        const { file } = get();
        if (!file) return;

        try {
            const response = await productsApi.uploadPrescription(file);
            set({ fileId: response.data.fileId });
            return response.data;
        } catch (error) {
            console.error('Upload failed:', error);
            throw error;
        }
    },

    nextStep: () => set((state) => ({
        currentStep: Math.min(state.currentStep + 1, 4)
    })),
    prevStep: () => set((state) => ({
        currentStep: Math.max(state.currentStep - 1, 0)
    })),
}));