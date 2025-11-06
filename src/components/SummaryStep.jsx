// src/components/SummaryStep.jsx
import { useState } from 'react';
import { useConfigStore } from '../store/configStore';
import { getTranslations } from '../utils/translations';

function SummaryStep() {
    const [loading, setLoading] = useState(false);
    const { config, selections, pricing, file, uploadFile, currency } = useConfigStore();
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

    return (
        <article className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mb-10">{t.title}</h1>
            <div className="p-8 rounded-lg border-2 w-96">
                <div className="space-y-4 mb-6">
                    <div>
                        <h3 className="font-semibold">{t.glassType}</h3>
                        <p>{config.glassTypes.find(g => g.id === selections.glassType)?.name || '-'}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">{t.tint}</h3>
                        <p>{config.tints.find(t => t.id === selections.tint)?.name || '-'}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">{t.frame}</h3>
                        <p>{config.frames.find(f => f.id === selections.frame)?.name || '-'}</p>
                    </div>
                    {file && (
                        <div>
                            <h3 className="font-semibold">{t.prescription}</h3>
                            <p className="text-sm text-gray-600">📄 {file.name}</p>
                        </div>
                    )}
                    <hr />
                    <div>
                        <div className="flex justify-between">
                            <span>{t.base}</span>
                            <span>{pricing.basePrice} {config.currency}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{t.tax}</span>
                            <span>{pricing.tax} {config.currency}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{t.shipping}</span>
                            <span>{pricing.shipping} {config.currency}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-2">
                            <span>{t.total}</span>
                            <span>{pricing.total} {config.currency}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-4 text-sm">
                    <p className="text-yellow-800">{t.testNotice}</p>
                </div>

                <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full bg-[#043451] text-white py-3 px-4 rounded font-semibold hover:bg-[#032940] disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? t.btnProcessing : t.btnPay}
                </button>
            </div>
        </article>
    );
}

export default SummaryStep;