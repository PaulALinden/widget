// PriceBar.jsx — visar en kompakt pris- och sammanfattningsvy längst ner
// Ger snabb åtkomst till vald info och möjlighet att visa hela sammanfattningen
import { useState } from 'react';
import { FaTimes, FaUpload } from 'react-icons/fa';
import { useConfigStore } from '../store/configStore';
import { getTranslations } from '../utils/translations';

function PriceBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { pricing, config, selections, currentStep, file, nextStep, currency } = useConfigStore();
    const t = getTranslations(currency).summaryStep; // Reuse summaryStep translations for consistency

    // Hjälpfunktion för att visa valt namn för ett visst steg
    const getSelectionName = (key) => {
        if (!config) return '-';
        if (key === 'glassType') {
            return config.glassTypes.find(g => g.id === selections.glassType)?.name || '-';
        }
        if (key === 'tint') {
            return config.tints.find(t => t.id === selections.tint)?.name || '-';
        }
        if (key === 'frame') {
            return config.frames.find(f => f.id === selections.frame)?.name || '-';
        }
        return '-';
    };

    // Hantera knapp i pricebar för att gå vidare efter upload
    const handleUpload = async () => {
        nextStep();
    };

    const isUploadStep = currentStep === 3;

    return (
        <>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
            )}
            {isOpen && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-1/3 bg-white rounded-lg shadow-xl p-6 z-50">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
                    >
                        <FaTimes />
                    </button>
                    <h3 className="font-bold text-lg mb-4">{t.title}</h3>
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t.glassType}</span>
                            <span className="font-semibold">{getSelectionName('glassType')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t.tint}</span>
                            <span className="font-semibold">{getSelectionName('tint')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t.frame}</span>
                            <span className="font-semibold">{getSelectionName('frame')}</span>
                        </div>
                        {file && (
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t.prescription}</span>
                                <span className="font-semibold">{file.name}</span>
                            </div>
                        )}
                    </div>
                    <hr className="my-4" />
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>{t.base}</span>
                            <span>{pricing.basePrice || 0} {config?.currency}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>{t.tax} ({pricing.taxPercent}%)</span>
                            <span>{pricing.tax || 0} {config?.currency}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>{t.shipping}</span>
                            <span>{pricing.shipping || 0} {config?.currency}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                            <span>{t.total}</span>
                            <span>{pricing.total || 0} {config?.currency}</span>
                        </div>
                    </div>
                </div>
            )}
            {/* PriceBar */}
            <section className="h-10 w-full flex items-center justify-between px-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative z-30">
                {currentStep !== 4 && (
                    <>
                        <div className="flex-1"></div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer font-semibold text-[#043451] transition"
                        >
                            {currency === 'sek' ? 'Dina glas' : 'Your glasses'} {pricing.total || 0} {config?.currency || 'SEK'} {isOpen ? '▼' : '▲'}
                        </button>
                        <div className="flex-1 flex justify-end">
                            {isUploadStep && (
                                <button
                                    onClick={handleUpload}
                                    disabled={!file}
                                    className="cursor-pointer bg-[#043451] text-white px-4 py-1 rounded flex items-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#032a3d] transition"
                                >
                                    <FaUpload />
                                    {t.uploadStep?.uploadPrompt || 'Upload'}
                                </button>
                            )}
                        </div>
                    </>
                )}
            </section>
        </>
    );
}

export default PriceBar;