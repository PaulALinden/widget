// src/components/PriceBar.jsx
import { useConfigStore } from '../store/configStore';

function PriceBar() {
    const pricing = useConfigStore((state) => state.pricing);
    const config = useConfigStore((state) => state.config);

    return (
        <section className="h-10 w-full flex items-center justify-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <button className="cursor-pointer">
                {`Dina glas ${pricing.total || 0} ${config?.currency || 'SEK'} ^`}
            </button>
        </section>
    );
}

export default PriceBar;