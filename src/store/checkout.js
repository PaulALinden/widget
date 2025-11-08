// checkout.js — Hook som hanterar checkout-flödet (ligger i store)
// Ansvar: ladda upp eventuella filer, anropa backend för att skapa
// en Stripe Checkout-session och navigera användaren dit.
import { useConfigStore } from './configStore';
import { getTranslations } from '../utils/translations';
import { create } from 'zustand';

const CHECKOUT_API_URL = import.meta.env.VITE_CHECKOUT_API_URL;

const useCheckoutStore = create((set) => ({
    loading: false,
    setLoading: (value) => set({ loading: value }),
}));

export const useCheckout = () => {
    const { config, selections, pricing, file, uploadFile, currency } = useConfigStore();
    const { loading, setLoading } = useCheckoutStore();
    const t = getTranslations(currency).summaryStep;

    const handleCheckout = async () => {
        // Starta loading-state
        setLoading(true);
        try {
            // Om användaren laddat upp en fil, ladda upp den först
            let uploadedFileId = null;
            if (file) {
                const uploadResult = await uploadFile();
                uploadedFileId = uploadResult.fileId;
            }

            // Anropa backend för att skapa en Stripe Checkout-session
            const response = await fetch(CHECKOUT_API_URL, {
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
            // Navigera användaren till den skapade Stripe-sessionen
            window.location.href = data.url;
        } catch (error) {
            console.error('Checkout error:', error);
            alert(t.error);
            setLoading(false);
        }
    };

    return { handleCheckout, loading };
};