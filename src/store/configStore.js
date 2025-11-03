import { create } from 'zustand';
import { productsApi } from '../api/productsApi';

export const useConfigStore = create((set, get) => ({
    storeId: 'store_1',
    config: null,
    selections: {},
    pricing: { total: 0 },
    currentStep: 0,
    file: null, 

    loadConfig: async (storeId) => {
        const response = await productsApi.getStoreConfig(storeId);
        set({ config: response.data, storeId });
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

    nextStep: () => set((state) => ({
        currentStep: Math.min(state.currentStep + 1, 4)
    })),
    prevStep: () => set((state) => ({
        currentStep: Math.max(state.currentStep - 1, 0)
    })),
}));