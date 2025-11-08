// CardContainer.jsx — wrapper som visar flera Card-komponenter för ett steg
// Använder store.updateSelection för att spara valet och går automatiskt vidare till nästa steg
import { useConfigStore } from '../store/configStore';
import Card from './Card';

function CardContainer({ title, data, selectionKey }) {
    const { updateSelection, nextStep } = useConfigStore();

    // När ett kort väljs uppdateras selection i store och går vidare
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
                        price={item.price}
                        onClick={() => handleSelect(item.id)}
                    />
                ))}
            </section>
        </article>
    );
}

export default CardContainer;