// configStore.js — global store för konfiguratorn
// Ansvar: hålla konfig, användarens val (selections), prisdata, currentStep och fil
import { create } from 'zustand';
import { productsApi } from '../api/productsApi';

// Centralt storeID från environment
const STORE_ID = import.meta.env.VITE_STORE_ID;

export const useConfigStore = create((set, get) => ({
    storeId: STORE_ID,
    config: null,
    selections: {},
    pricing: { total: 0 },
    currentStep: 0,
    file: null,

    loadConfig: async () => {
        // Ladda konfigurering från backend. Använder STORE_ID från environment.
        const response = await productsApi.getStoreConfig(STORE_ID);
        set({ config: response.data, storeId: STORE_ID });
    },

    setFile: (file) => set({ file }),

    updateSelection: async (key, value) => {
        // Uppdatera urval lokalt först
        set((state) => ({
            selections: { ...state.selections, [key]: value }
        }));
        // Be backend räkna ut pris baserat på current selections
        const { selections } = get();
        const newSelections = { ...selections, [key]: value };
        try {
            const response = await productsApi.calculatePrice(STORE_ID, newSelections);
            // Sätt prisobjektet som kommer från backend
            set({ pricing: response.data });
        } catch (error) {
            console.error('Price failed:', error);
        }
    },

    uploadFile: async () => {
        const { file } = get();
        if (!file) return;
        // Ladda upp fil via API och spara fileId i store
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