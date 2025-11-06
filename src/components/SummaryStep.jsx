// src/components/SummaryStep.jsx
import { useConfigStore } from '../store/configStore';
import { getTranslations } from '../utils/translations';
import { useCheckout } from '../store/checkout';

function SummaryStep() {
    const { config, selections, pricing, file, currency } = useConfigStore();
    const t = getTranslations(currency).summaryStep;
    const { handleCheckout, loading } = useCheckout();

    return (
        <article className="flex flex-col items-center justify-center text-[#043451]">
            <h1 className="font-bold text-2xl mb-4">{t.title}</h1>
            <div className="p-8 rounded-lg border-2 border-[#043451] w-96">
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
                
                <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="cursor-pointer w-full bg-[#043451] text-white py-3 px-4 rounded font-semibold hover:bg-[#032940] disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? t.btnProcessing : t.btnPay}
                </button>
            </div>
        </article>
    );
}

export default SummaryStep;