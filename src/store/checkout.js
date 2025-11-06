// src/hooks/useCheckout.js
import { useConfigStore } from './configStore';
import { getTranslations } from '../utils/translations';
import { create } from 'zustand';

const useCheckoutStore = create((set) => ({
    loading: false,
    setLoading: (value) => set({ loading: value }),
}));

export const useCheckout = () => {
    const { config, selections, pricing, file, uploadFile, currency } = useConfigStore();
    const { loading, setLoading } = useCheckoutStore();
    const t = getTranslations(currency).summaryStep;

    const handleCheckout = async () => {
        setLoading(true);
        try {
            let uploadedFileId = null;
            if (file) {
                const uploadResult = await uploadFile();
                uploadedFileId = uploadResult.fileId;
            }
            const response = await fetch('http://localhost:3001/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    selections,
                    pricing,
                    fileId: uploadedFileId,
                    config: {
                        currency: config.currency,
                        glassTypes: config.glassTypes,
                        tints: config.tints,
                        frames: config.frames,
                    },
                }),
            });
            const data = await response.json();
            window.location.href = data.url;
        } catch (error) {
            console.error('Checkout error:', error);
            alert(t.error);
            setLoading(false);
        }
    };

    return { handleCheckout, loading };
};