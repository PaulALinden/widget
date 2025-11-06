import { useConfigStore } from '../store/configStore';
import Card from './Card';

function CardContainer({ title, data, selectionKey }) {
    const { selections, updateSelection, nextStep } = useConfigStore();

    const handleSelect = async (itemId) => {
        await updateSelection(selectionKey, itemId);
        nextStep();  // Gå till nästa steg automatiskt
    };

    return (
        <article className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl text-[#043451] mb-10">{title}</h1>
            <section className="flex flex-row flex-wrap justify-center gap-4 max-h-80">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        imageSrc={item.image}
                        title={item.name}
                        description={item.description}
                        selected={selections[selectionKey] === item.id}
                        onClick={() => handleSelect(item.id)}
                    />
                ))}
            </section>
        </article>
    );
}

export default CardContainer;