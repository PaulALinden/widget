import { useConfigStore } from '../store/configStore';

function SummaryStep() {
    const { config, selections, pricing } = useConfigStore();

    const handleCheckout = async () => {
        try {
            const response = await fetch('http://localhost:3001/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selections,
                    pricing,
                    config: {
                        currency: config.currency,
                        glassTypes: config.glassTypes,
                        tints: config.tints,
                        frames: config.frames,
                    }
                }),
            });
            const data = await response.json();
            window.location.href = data.url;
        } catch (error) {
            console.error('Checkout error:', error);
            alert('Något gick fel. Försök igen.');
        }
    };

    return (
        <article className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mb-10">Granska din order</h1>
            <div className="p-8 rounded-lg border-2 w-96">
                <div className="space-y-4 mb-6">
                    <div>
                        <h3 className="font-semibold">Glastyp:</h3>
                        <p>{config.glassTypes.find(g => g.id === selections.glassType)?.name || '-'}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Toning:</h3>
                        <p>{config.tints.find(t => t.id === selections.tint)?.name || '-'}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Båge:</h3>
                        <p>{config.frames.find(f => f.id === selections.frame)?.name || '-'}</p>
                    </div>
                    <hr />
                    <div>
                        <div className="flex justify-between">
                            <span>Baspris:</span>
                            <span>{pricing.basePrice} {config.currency}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Moms:</span>
                            <span>{pricing.tax} {config.currency}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Frakt:</span>
                            <span>{pricing.shipping} {config.currency}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-2">
                            <span>Totalt:</span>
                            <span>{pricing.total} {config.currency}</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleCheckout}
                    className="cursor-pointer w-full bg-[#043451] text-white py-3 px-4 rounded font-semibold hover:bg-[#032940]"
                >
                    Gå till betalning
                </button>
            </div>
        </article>
    );
}

export default SummaryStep;