// SummaryStep.jsx — visar en genomgång av användarens val och pris
// Innehåller knapp för att gå vidare till betalning (använder useCheckout)
import { useConfigStore } from '../store/configStore';
import { getTranslations } from '../utils/translations';
import { useCheckout } from '../store/checkout';

function SummaryStep() {
    // Hämta nödvändigt globalt state från store
    const { config, selections, pricing, file } = useConfigStore();
    const t = getTranslations();
    const { handleCheckout, loading } = useCheckout();

    return (
        <article className="flex flex-col items-center justify-center text-[#043451]">
            <h1 className="font-bold text-2xl mb-4">{t.title}</h1>
            <div className="p-8 rounded-lg border-2 border-[#043451] w-96">
                <div className="space-y-4 mb-6">
                    <div>
                        <h3 className="font-semibold">{t.summaryStep.glassType}</h3>
                        <p>{config.glassTypes.find(g => g.id === selections.glassType)?.name || t.summaryStep.noSelection}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">{t.summaryStep.tint}</h3>
                        <p>{config.tints.find(t => t.id === selections.tint)?.name || t.summaryStep.noSelection}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">{t.summaryStep.frame}</h3>
                        <p>{config.frames.find(f => f.id === selections.frame)?.name || t.summaryStep.noSelection}</p>
                    </div>
                    {file && (
                        <div>
                            <h3 className="font-semibold">{t.summaryStep.prescription}</h3>
                            <p className="text-sm text-gray-600">{t.summaryStep.fileIcon} {file.name}</p>
                        </div>
                    )}
                    <hr />
                    <div>
                        <div className="flex justify-between">
                            <span>{t.summaryStep.base}</span>
                            <span>{pricing.basePrice} {t.priceBar.currency}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{t.summaryStep.tax}</span>
                            <span>{pricing.tax} {t.priceBar.currency}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{t.summaryStep.shipping}</span>
                            <span>{pricing.shipping} {t.priceBar.currency}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-2">
                            <span>{t.summaryStep.total}</span>
                            <span>{pricing.total} {t.priceBar.currency}</span>
                        </div>
                    </div>
                </div>
                
                {/* Betal-knapp: skickar användaren vidare via checkout-hook */}
                <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="cursor-pointer w-full bg-[#043451] text-white py-3 px-4 rounded font-semibold hover:bg-[#032940] disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? t.summaryStep.btnProcessing : t.summaryStep.btnPay}
                </button>
            </div>
        </article>
    );
}

export default SummaryStep;